const{Engine, World, Bodies, MouseConstraint, Mouse, Constraint, Composites} = Matter;
var world, engine;
let ground;
let bird;
var mouseConstraint;
var box1, box2, box3, box4, box5, box6, box7, box8, box9, box10, box11, box12;
var base1, base2;
var sling;
var topBoundary, leftBoundary, rightBoundary;
var score = 0;

function setup(){
	
    createCanvas(windowWidth,windowHeight);	
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(width/2, height-25, width, 50);
    bird = new Bird(200, 300, 20);

    box1 = new boxClass(width-836, height-264, 60, 60);
    box2 = new boxClass2(width-736, height-264, 60, 60);
    box3 = new boxClass3(width-636, height-264, 60, 60);
    box4 = new boxClass4(width-786, height-354, 60, 60);
    box5 = new boxClass5(width-686, height-354, 60, 60);
    box6 = new boxClass6(width-736, height-444, 60, 60);

    box7 = new boxClass(width-836, height-464, 60, 60);
    box8 = new boxClass2(width-736, height-464, 60, 60);
    box9 = new boxClass3(width-636, height-464, 60, 60);
    box10 = new boxClass4(width-786, height-554, 60, 60);
    box11 = new boxClass5(width-686, height-554, 60, 60);
    box12 = new boxClass6(width-736, height-644, 60, 60);

    base1 = new Base(width-736, height-254, 300, 10);
    base2 = new Base(width-736, height-454, 300, 10);

    leftBoundary = new Boundary(-50,350,50,900);
    rightBoundary = new Boundary(width-6,350,50,900);
    topBoundary = new Boundary(600,-50,1200,100);

    sling = new Slingshot(bird.body, {x:width-1236, y:height-454});


    const mouse = Mouse.create(canvas.elt);

	var options = {
		mouse: mouse
	}
	
    mouseConstraint = MouseConstraint.create(engine, options);
    World.add(world, mouseConstraint);
}

function draw(){
    background(30,30,30);
    Engine.update(engine);

    textSize(20);
    fill(255);
    text("Score  " + score,500,50);

    ground.display();
    bird.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    base1.display();
    base2.display();
    leftBoundary.display();
    rightBoundary.display();
    topBoundary.display();
    sling.display();
    console.log(score);
}

function mouseReleased(){
    setTimeout(() =>{
        sling.fly();
    },15);
    
}

function keyPressed(){
    if(keyCode === 32){
        World.remove(world, bird.body);
        bird = new Bird(200, 300, 20);
        sling.attach(bird.body);
    }
}