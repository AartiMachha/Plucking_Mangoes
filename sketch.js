
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var tree;
var stone, elastic;
var boy, boyImg;
var mango1, mango2, mango3, mango4, mango5, mango6, mango7, mango8, mango9;

function preload()
{
	boyImg = loadImage('boy.png');
}

function setup() {
	createCanvas(1500, 650);

	engine = Engine.create();
	world = engine.world;

	stone = new Stone(290,590,30);

	mango1 = new Mango(1000,258,0,0);
	
	mango2 = new Mango(960,190,0,0);
	
	mango3 = new Mango(1100,130,0,0);

	mango4 = new Mango(1020,90,0,0);

	mango5 = new Mango(900,270,0,0);

	mango6 = new Mango(870,210,0,0);

	mango7 = new Mango(1210,195,0,0);
	
	mango8 = new Mango(1090,240,0,0);

	mango9 = new Mango(1165,245,0,0);

	tree = new Tree(1020,610);
	
	elastic = new Elastic(stone.body,{x:235,y:475});

	ground = new Ground(700,650,1500,30);

	boy = createSprite(290,530,0,0);
	boy.addImage('boy.png',boyImg);
	boy.scale=0.1;

	stone.depth=tree.depth;
	stone.depth=stone.depth+1;

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine)
  
 stone.display();
 elastic.display(); 
 tree.display();
 ground.display();
 boy.display();
 mango1.display();
 mango2.display();
 mango3.display();
 mango4.display();
 mango5.display();
 mango6.display();
 mango7.display();
 mango8.display();
 mango9.display();

 detectCollision(stone,mango1);
 detectCollision(stone,mango2);
 detectCollision(stone,mango3);
 detectCollision(stone,mango4);
 detectCollision(stone,mango5);
 detectCollision(stone,mango6);
 detectCollision(stone,mango7);
 detectCollision(stone,mango8);
 detectCollision(stone,mango9);

 
 fill("white");
 textSize(25);
 text("Press Space to get a second Chance to Play!!",100,100);
}

function mouseDragged(){
	Matter.Body.setPosition(stone.body,{x:mouseX, y:mouseY})
}

function mouseReleased(){
	elastic.fly()
}

function detectCollision(m1,s1){
	 mangoBodyPosition = m1.body.position;
	 stoneBodyPosition = s1.body.position;

	var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);
	if(distance<=m1.r+s1.r){
		Matter.Body.setStatic(m1.body,false);
	}
}

function keyPressed(){
	if(keyDown('SPACE')){
		Matter.body.setPosition(stone.body,{x:290,y:590})
		elastic.attach(stone.body);
	}
}