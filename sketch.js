var trex, trex_running, edges;
var groundImage;

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  groundImage = loadImage("ground2.png")
}

function setup(){
  createCanvas(600,200);
  trex = createSprite(50, 180, 10, 40)
  trex.addAnimation("run", trex_running);
trex.scale = 0.4;


ground = createSprite(300, 180, 600, 10)
ground.addImage(groundImage);
ground.velocityX=-5
}

function draw(){
  //set background color 
  background("black");
  
  if(keyDown("space")){
    trex.velocityY = -9
  }
  trex.velocityY = trex.velocityY+0.7;

  if(ground.x<0){
    ground.x = ground.width/2
  }
  trex.collide(ground)
  drawSprites();
}