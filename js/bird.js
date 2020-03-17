//MY SLINGSHOT
class Bird{
	constructor(x,y,radius){
		var options ={
			'restitution':0.8,
			'friction':0.6,
			'density':1.0
		}
		this.body = Bodies.circle(x,y,radius,options);
		this.radius = radius;
		World.add(world, this.body);
	}

	display(){
		var pos = this.body.position;
		var angle = this.body.angle;
		push();
		translate(pos.x, pos.y);
		rotate(angle);
		fill(128,100,255);
		ellipseMode(RADIUS);
		circle(0, 0, this.radius); 
		pop();
	}
}