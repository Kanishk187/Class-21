var fixedRect, movingRect;
var Rect1, Rect2, Rect3;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  Rect1 = createSprite(100,200,80,30);
  Rect2 = createSprite(200,200,80,30);
  Rect3 = createSprite(300,200,80,30);
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

if (isTouching(movingRect,Rect1)){

movingRect.shapeColor="red"
Rect1.shapeColor="red"

}
else{

movingRect.shapeColor="Green"
Rect1.shapeColor="Green"  

}

  drawSprites();
}
