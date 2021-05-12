const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper1;
var ground1;
//var binPart1, binPart2, binPart3;
var binObj;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);

	engine = Engine.create();
	world = engine.world;
	

	ground1 = new Ground(1000,650,2000,8)
	paper1 = new Paper(200,450,70)
	// binPart1 = new Bin(998,550,20,180)
	// binPart2 = new Bin(1080,630,150,20)
	// binPart3 = new Bin(1160,550,20,180)
	binObj = new Bin(1200,650);

	Engine.run(engine);
}


function draw() {

background(230);

ground1.display();
// binPart1.display();
// binPart2.display();
// binPart3.display();
binObj.display();
paper1.display();

drawSprites();
}

function keyPressed(){
	if (keyCode === UP_ARROW){
	Matter.Body.applyForce(paper1.body,paper1.body.position,{x:385,y:-385})
	}
}
