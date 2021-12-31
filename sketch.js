const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body
var myengine;
var button2
var myworld;
var ball

var ground;
var left;
var right;
var top_wall;
var bounce
var button1
function Moveup(){
console.log("working")
  Body.applyForce(ball,{x: 0, y:0}, {x:0, y:-0.05})

}
function Moveright(){
  Body.applyForce(ball, {x:0,  y:0}, {x:0.05, y:0})
}
function setup() {
  createCanvas(400,400);
  myengine = Engine.create();
  myworld = myengine.world;
  var bounce = {
    restitution: 0.4
  }
  ball = Bodies.circle(200, 200, 15, bounce)
  World.add(myworld, ball)
  button1 = createImg("up.png")
  button1.position(280, 300)
  button1.size(50, 50)
  button1.mouseClicked(Moveup)
  
  button2 = createImg("right.png")
  button2.position(330, 330)
  button2.size(50, 50)
  button2.mouseClicked(Moveright)
  ground =new Ground(200,390,400,20);
  right = new Ground(390,200,20,400);
  left = new Ground(10,200,20,400);
  top_wall = new Ground(200,10,400,20);
  
  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(51);
  ground.show();
  top_wall.show();
  left.show();
  right.show();
  Engine.update(myengine);
  ellipse(ball.position.x, ball.position.y,15, 15);
}

