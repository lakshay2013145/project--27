
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;



function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ball1= new Ball(400,200,20)
	chain1= new Chain(ball1.body,{x:400,y:110})
	ball2=new Ball(450,200,20,20)
	chain2=new Chain(ball2.body,{x:450,y:110})
	ball3=new Ball(500,200,20,20);
	chain3=new Chain(ball3.body,{x:500,y:110})
	ball4=new Ball(550,200,20,20);
	chain4=new Chain(ball4.body,{x:550,y:110})
	ball5=new Ball(600,200,20,20);
	chain5=new Chain(ball5.body,{x:600,y:110})
}


function draw() {
	Engine.update(engine);	
  rectMode(CENTER);
  background(0);
  rect(500,100,250,20);
 ball1.display()
 chain1.display();
 ball2.display(); 
 chain2.display();
 ball3.display();
 chain3.display();
 ball4.display();
 chain4.display();
 ball5.display();
 chain5.display();
 
}
function keyPressed(){
   if(keyCode == UP_ARROW){
	Matter.Body.applyForce(ball1.body, ball1.body.position,{x: 150 , y: -100});
   }
}


