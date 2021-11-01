const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine,world;
var bob1,bob2,bob3,bob4,bob5;
var slingshot1,slingshot2,slingshot3,slingshot4,slingshot5;
var bgColor;

gameState = "0";

function setup(){
    
    createCanvas(windowWidth,windowHeight);

    engine = Engine.create();
    world = engine.world;

    bob3 = new Bob (windowWidth/2,windowHeight/3+windowHeight/3,50);
    bob2 = new Bob (bob3.body.position.x-100,windowHeight/3+windowHeight/3,50);
    bob1 = new Bob (bob2.body.position.x-100,windowHeight/3+windowHeight/3,50);
    bob4 = new Bob (bob3.body.position.x+100,windowHeight/3+windowHeight/3,50);
    bob5 = new Bob (bob4.body.position.x+100,windowHeight/3+windowHeight/3,50);

    slingshot1 = new Slingshot (bob1.body,{x:bob1.body.position.x,y:windowHeight/3-150});
    slingshot2 = new Slingshot (bob2.body,{x:bob2.body.position.x,y:windowHeight/3-150});
    slingshot3 = new Slingshot (bob3.body,{x:bob3.body.position.x,y:windowHeight/3-150});
    slingshot4 = new Slingshot (bob4.body,{x:bob4.body.position.x,y:windowHeight/3-150});
    slingshot5 = new Slingshot (bob5.body,{x:bob5.body.position.x,y:windowHeight/3-150});

    bgColor = color(random(0,100),random(0,100),random(0,100));

}

function draw(){

    background(bgColor);

    Engine.update(engine);

    bob1.display();
    bob2.display();
    bob3.display();
    bob4.display();
    bob5.display();

    slingshot1.display();
    slingshot2.display();
    slingshot3.display();
    slingshot4.display();
    slingshot5.display();

    textFont("Georgia");
    textSize(60);
    fill(255);
    text("Newton's Cradle!",10,70);
    textSize(15);
    text("To drag the first bob with the mouse, press 1.",10,height-81);
    text("To drag the second bob with the mouse, press 2.",10,height-64);
    text("To drag the third bob with the mouse, press 3.",10,height-47);
    text("To drag the fourth bob with the mouse, press 4.",10,height-30);
    text("To drag the fifth bob with the mouse, press 5.",10,height-13)
    
}

function mouseDragged() {

    if(gameState === "1") {
        Matter.Body.setPosition(bob1.body,{x:mouseX,y:mouseY});
    }

    if(gameState === "2") {
        Matter.Body.setPosition(bob2.body,{x:mouseX,y:mouseY});
    }

    if(gameState === "3") {
        Matter.Body.setPosition(bob3.body,{x:mouseX,y:mouseY});
    }

    if(gameState === "4") {
        Matter.Body.setPosition(bob4.body,{x:mouseX,y:mouseY});
    }

    if(gameState === "5") {
        Matter.Body.setPosition(bob5.body,{x:mouseX,y:mouseY});
    }

}

function keyPressed() {

    if(keyCode === 49) {
        gameState = "1";
    }

    if(keyCode === 50) {
        gameState = "2";
    }

    if(keyCode === 51) {
        gameState = "3";
    }

    if(keyCode === 52) {
        gameState = "4";
    }

    if(keyCode === 53) {
        gameState = "5";
    }

}
