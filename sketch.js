
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,dust_im,dust,groundObject,ball1;	
var world;

function setup() {
	createCanvas(1500, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj = new dustbin(1300,640);
	ball1 = new ball(100,600,80,80) 

	Engine.run(engine);
  
}


function draw() {
	background(0);
  rectMode(CENTER);
  background(230);

  groundObject.display();
  dustbinObj.display();
  ball1.display();

  if (keyCode === UP_ARROW){

	Matter.Body.applyForce(ball1.body,ball1.body.position,{x:130,y:-145})
  
	}

}

