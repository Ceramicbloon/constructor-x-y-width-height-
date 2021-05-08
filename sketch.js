const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
const Body = Matter.Body
const Constraint = Matter.Constraint
var bg, bgi
//var world
function preload() {
  //preload the images here
  bgi = loadImage("gamingbackground2.png")
}

function setup() {
  createCanvas(1000, 400);
  engine = Engine.create()
  world = engine.world
  ground = new Ground(400, 380, 800, 10)
  box1 = new Block(500, 360, 40, 40)
  box2 = new Block(500, 360-40, 40, 40)
  box3 = new Block(500, 360-40*2, 40, 40)
  box4 = new Block(500, 360-40*3, 40, 40)
  box5 = new Block(500, 360-40*4, 40, 40)
  box14 = new Block(500, 360-40*5, 40, 40)
  box15 = new Block(500, 360-40*6, 40, 40)

  box6 = new Block(450, 360, 40, 40)
  box7 = new Block(450, 360-40, 40, 40)
  box8 = new Block(450, 360-40*2, 40, 40)
  box9 = new Block(450, 360-40*3, 40, 40)
  box16 = new Block(450, 360-40*4, 40, 40)
  
  
  box10 = new Block(550, 360, 40, 40)
  box11 = new Block(550, 360-40, 40, 40)
  box12 = new Block(550, 360-40*2, 40, 40)
  box13 = new Block(550, 360-40*3, 40, 40)
  box17 = new Block(550, 360-40*4, 40, 40)
  box18 = new Block(550, 360-40*5, 40, 40)
  monster = new Monster(700, 300, 100, 100)

  superhero = new Hero(200, 200, 200, 100)
  fly1 = new fly(superhero.body, {x: 200, y:200})
}

function mouseDragged(){
  Matter.Body.setPosition(superhero.body, {x: mouseX, y: mouseY})


}

function draw() {
  Engine.update(engine);
  background(bgi);
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  superhero.display();
  monster.display();
}

