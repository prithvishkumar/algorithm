var m,f

function setup() {
 createCanvas(800,400);
 m=createSprite(400, 200, 50, 50);
 f=createSprite(300,200,50,50)
 m.shapeColor="blue"
 f.shapeColor="blue"
}

function draw() {
  background(255,255,255); 
  m.x=World.mouseX
  m.y=World.mouseY
  if(m.x-f.x===m.width/2+f.width/2)
  {
  m.shapeColor="red"
  f.shapeColor="red"
  }
  else
  {
  m.shapeColor="blue"
  f.shapeColor="blue"
  }
  drawSprites();
}