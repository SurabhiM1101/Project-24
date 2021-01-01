

var ground;
var box1,box2,box3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;




function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	groundSprite=createSprite(width/2, height-35, width,10 );
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 
	 
	box1 = new Box(650,500,195,20);	
	box2 = new Box(600,500,20,100);	
	box3=new Box(700,500,20,100);
	paper1=new Paper(100,150,40);
     World.add(world, box1);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  box1.display();
  box2.display();
  box3.display();
  paper1.display();
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
	   // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	   
	   Matter.Body.applyForce(paper1.body,paper1.body.position,{x:15,y:-15} );
	   
	   
	  
	 }
   }



