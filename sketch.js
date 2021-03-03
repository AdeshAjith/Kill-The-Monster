const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload() {
  backgroundImg = loadImage("images/GamingBackground.png");
  monsterImg = loadImage("images/Monster-01.png");
}


function setup() {
  createCanvas(1530, 750);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600,600,1200,20);

  SuperHero = new Hero(400,500,100,100);
  Flying = new Fly(SuperHero.body,{x:400,y:200})

  Block1 = new Block(600,500,100,100);
  Block2 = new Block(600,400,100,100);
  Block3 = new Block(600,300,100,100);
  Block4 = new Block(600,200,100,100);

  Block5 = new Block(720,500,100,100);
  Block6 = new Block(720,400,100,100);
  Block7 = new Block(720,300,100,100);
  Block8 = new Block(720,200,100,100);
  Block9 = new Block(720,100,100,100);

  Block10 = new Block(840,500,100,100);
  Block11 = new Block(840,400,100,100);
  Block12 = new Block(840,300,100,100);
  Block13 = new Block(840,200,100,100);
  
  Monster1 = new Monster(1100,500,100,100) 

  Engine.run(engine);

}

function draw() {
  background(backgroundImg);
  Engine.update(engine)

  ground.display();
  SuperHero.display();
  Flying.display();
  Block1.display();
  Block2.display();
  Block3.display();
  Block4.display();

  Block5.display();
  Block6.display();
  Block7.display();
  Block8.display();
  Block9.display();

  Block10.display();
  Block11.display();
  Block12.display();
  Block13.display();

  Monster1.display();

}

 function mouseDragged(){
  Body.setPosition(SuperHero.body,{x : mouseX, y : mouseY})
}

