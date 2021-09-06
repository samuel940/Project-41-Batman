const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var drops, maxDrops, umbrella;

function preload(){
    
}

function setup(){

    createCanvas(500, 500);
    engine = Engine.create();
    world = engine.world;
    drops = [];
    maxDrops = 100
    umbrella = new Umbrella(250,400,100);
   for (i = 0; i <maxDrops; i++) {
       drops.push(new Drop(random(0,500), random(0,490),5));
   }
    
}

function draw(){
    background(0,0,0);
    umbrella.display();
    for (var i = 0; i < drops.length; i++) {
        drops[i].display();
        if (drops[i].y > 500) {
            //drops[i].update();
        }
    }

}   

