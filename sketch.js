
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var dustbinObj,groundObject	;
var garbage;
var world;

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject= new ground(width/2,670,width,20);
	dustbinObj= new dustbin(1200,650);
	garbage = new Garbage(500, 500, 80);


	Engine.run(engine);
  
}


function draw() {
  background(230);

  Engine.update(engine);
 
  garbage.display();
  groundObject.display();
  dustbinObj.display();
  

}
function keyPressed()
 { if (keyCode === UP_ARROW) {
	 Matter.Body.applyForce(garbage.body,garbage.body.position,{x:500,y:-500});
	 }
	}
