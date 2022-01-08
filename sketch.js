var box;
function setup() {
  createCanvas(500,500);

box = createSprite(200,300,50,50);
}

function draw() 
{
  background("pink");

  if (keyIsDown(RIGHT_ARROW)){
    box.position.x=box.position.x+10;
  }

  if (keyIsDown(LEFT_ARROW)){
    box.position.x=box.position.x-10;
  }

  if (keyIsDown(UP_ARROW)){
    box.position.y=box.position.y-10;
  }

  if (keyIsDown(DOWN_ARROW)){
    box.position.y=box.position.y+10;
  }

  drawSprites();
}




