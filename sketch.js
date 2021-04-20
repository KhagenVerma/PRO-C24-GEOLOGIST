const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var ball;
var pebble;
var Iron;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,580,1200,20)

    hammer = new Hammer(10,100);

    ball = new Rubber(500,400,29);

    pebble = new Stone(600,500);

    Iron = new Ferrous(300,350);

}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    ball.display();
    pebble.display();
    Iron.display();
 
}