var fixedRect,movingRect;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(200, 200, 50, 80);
  fixedRect.shapeColor = "green";
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
}

function draw() {
  background(255,255,255);  

  console.log(movingRect.x-fixedRect.x);
  var distance = (movingRect.width/2+fixedRect.width/2);
  console.log("Distance"+distance); 

  movingRect.x = mouseX;
  movingRect.y = mouseY;

  if((movingRect.x-fixedRect.x < movingRect.width/2+fixedRect.width/2) &&
      (fixedRect.x-movingRect.x < movingRect.width/2+fixedRect.width/2)&&
      (movingRect.y-fixedRect.y < movingRect.height/2+fixedRect.height/2)&&
      (fixedRect.y-movingRect.y < movingRect.height/2+fixedRect.height/2)){

    fixedRect.shapeColor = "red";
    movingRect.shapeColor = "red";

  }else{

    fixedRect.shapeColor = "green";
    movingRect.shapeColor = "green";

  }
  drawSprites();
}