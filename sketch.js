var ground, groundImg;
var tom, jerry, tomImg1, tomImg2, jerryImg1, jerryImg2;

function preload() {
    //load the images here
    groundImg = loadImage("images/garden.png");

    tomImg1 = loadAnimation("images/tomOne.png");
    tomImg2 = loadAnimation("images/tomTwo.png", "images/tomThree.png");
    tomImg3 = loadAnimation("images/tomFour.png");

    jerryImg1 = loadAnimation("images/jerryOne.png");
    jerryImg2 = loadAnimation("images/jerryTwo.png", "images/jerryThree.png");
    jerryImg3 = loadAnimation("images/jerryFour.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here

    tom = createSprite(600,600, 30, 70);
    tom.addAnimation("sleeping", tomImg1);
    //tom.changeAnimation("sleeping");
    tom.scale = 0.1;

    jerry = createSprite(100, 600, 20, 50);
    jerry.addAnimation("standing", jerryImg1);
    //jerry.changeAnimation("standing");
    jerry.scale = 0.1;

    //tom.debug = true;
    //tom.setCollider("rectangle", 0, 0, tom.width, tom.height);
    //jerry.debug = true;

}

function draw() {

    background(groundImg);
    //Write condition here to evalute if tom and jerry collide

    keyPressed();

    if(tom.x - jerry.x < (tom.width - jerry.width)/2) {
    //if(tom.x - jerry.x < (tom.width + jerry.width)/2) {
        tom.velocityX = 0;
        tom.addAnimation("tomLastImage", tomImg3);
        tom.changeAnimation("tomLastImage");
        tom.scale = 0.1;
        tom.x = 200;
        
        jerry.addAnimation("jerryLastImage", jerryImg3);
        jerry.changeAnimation("jerryLastImage");
    }

    drawSprites();
}


function keyPressed(){

    //For moving and changing animation write code here
    if(keyDown("LEFT_ARROW")) {
        tom.velocityX = -4;
        tom.addAnimation("running", tomImg2);
        tom.changeAnimation("running");
        tom.scale = 0.1;

        jerry.addAnimation("teasing", jerryImg2);
        jerry.changeAnimation("teasing");
        jerry.scale = 0.1;
    }

}
