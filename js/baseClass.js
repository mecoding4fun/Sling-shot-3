//MY SLINGSHOT
class baseClass{
    constructor(x,y,width,height){
        var options ={
            'restitution':0.8,
            'friction':0.6,
            'density':1.0
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);

    }

    display(){
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        fill(200, 100, 50);
        noStroke();
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
    }
}