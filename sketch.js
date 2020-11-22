var  bullet  , wall, thickness;
var speed,weight;

function setup()
{
  createCanvas(1600,400);
  
  //giving random values 
  speed=random(30 , 52);
  weight=random(400,1500);
  thickness=random(22,83);
  
  //crearing car 
  car=createSprite(50,200,50,50);
  car.velocityX = speed;
  car.shapeColour=colour(225);

  //creating wall
  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColour=colour(80,80,80);
  wall=createSprite(1500, 200, 60, height/2);
  wall.velocityX = speed;

  createSprite(400, 200, 50, 50);
}

function draw() 
{
  background(black);
  if(wall.x-car.x<(car.width+wall.width)/2)
  {
    car.velocityX=speed;
    var deformation = 0.5 * weight * speed /22509;
  }
  if(deformation>180)
  {
     car.shapeColour=colour(255,0,0);
  }
  if(deformation<180 && deformation>100)
{
    car.shapeColour=colour(230,230,0);
}

if(deformation<100)
{
  car.shapeColour=colour(0,255,0);
}
  drawSprites();
}
