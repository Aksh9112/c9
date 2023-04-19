var box;

function setup() {
  createCanvas(1200,600);
  box=createSprite(100,100,100,100);
}

function draw() 
{
  background('black');
if(keyDown(RIGHT_ARROW)){
  box.position.x=box.position.x+1;
  
}
if(keyDown(LEFT_ARROW)){
  box.position.x=box.position.x-1;
  
}
if(keyDown(UP_ARROW)){
  box.position.y=box.position.y-1;
  
}
if(keyDown(DOWN_ARROW)){
  box.position.y=box.position.y+1;
  
}
drawSprites();
}




