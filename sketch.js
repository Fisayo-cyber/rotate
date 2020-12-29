// namespacing or aliasing
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var ground
  var engine,
    world;

  var box1;
  var box2;

  function setup() {

    createCanvas(400, 400);

    engine = Engine.create();
    world = engine.world

    //restitution, isStatic, density, friction - different properties

    Engine.run(engine)

    ground = new Ground(200, 400, 400, 20);

    box1 = new Box(220, 100, 20, 40);
    box2 = new Box(200, 50, 50, 25);

  }

  function draw() {
    background("pink");
    rectMode(CENTER)

    box1.display()
    box2.display()
    ground.display()

  }