
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground_wall,left_wall,rigth_wall;

var ball,ball_op;

ball_op = {
	restitution:0.95,
	frictionAir:0.01
}

//function preload()
//{
//	
//}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground_wall = new Ground (800,690,1600,20);
	rigth_wall = new Ground (1300,600,10,200);
	left_wall = new Ground (1000,600,10,200);

 ball = Bodies.circle(100,20,35,ball_op);
 World.add(world,ball);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS);
  background(0);
 ground_wall.show();
 rigth_wall.show();
 left_wall.show();
ellipse(ball.position.x,ball.position.y,35)
  
 drawSprites();
  
if (keyDown("up")){
	
	vforce()
}

 
}

 


function vforce() {
	Body.applyForce(ball,{x:0,y:0},{x:0.06,y:-0.05});
}



