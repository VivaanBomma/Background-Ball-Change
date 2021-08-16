//declaring variables
var box;

//create in function setup
function setup() {
  createCanvas(500, 500);
  box = createSprite(250, 250, 20, 20);
}

function draw() 
{
  background(30);

  if(keyDown(LEFT_ARROW)){
  box.x-=5  
    background("red")
  }

  if(keyDown(RIGHT_ARROW)){
  box.x+= 5
  background("blue")
  }

  if(keyDown(UP_ARROW)){
    box.y-=5
    background("pink")
  }
  
  if(keyDown(DOWN_ARROW)){
    box.y+=5
    background("yellow")
  }

  

  drawSprites()

}




