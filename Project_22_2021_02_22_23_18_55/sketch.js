const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, box1;

function setup(){
    createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }

    ground = Bodies.rectangle(200,390,200,20,ground_options);
    world.add(world,ground);

    var box1_options ={
        restitution: 1.0
    }

    box1 = Bodies.rectangle(200,100,20,20, ball_options);
    World.add(world,ball);

    console.log(ground);
}
function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);

   
    rect(box1.position.x, box1.position.y, 20, 20);
}

