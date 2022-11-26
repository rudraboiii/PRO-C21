const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine
let world

var ball;
var ground;
var leftSide;
var rightSide;

var btn


function setup() {
	createCanvas(1200, 700);
	engine = Engine.create();
	world = engine.world;

	var wall_options = {
		isStatic: true
	}

	var ball_options = {
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}


	ground = new Ground(width/2, 670, width,20)
	leftSide = new Ground(1100, 600, 20, 120)
	rightSide = new Ground(900, 600, 20, 120)

	//Create the Bodies Here.
	ball = Bodies.circle(200,100,20,ball_options);
	World.add(world,ball);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS);
  background(0);

  ellipse(ball.position.x,ball.position.y, 30)
  ground.display()
  leftSide.display()
  rightSide.display()

  drawSprites();
  Engine.update(engine);
 
}

function keyPressed() {
	if(keyCode === UP_ARROW) {
	
			Matter.Body.applyForce(ball, ball.position, {x:80, y:-80})
		
	}
}