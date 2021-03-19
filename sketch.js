var wall , thickness;
var bullet , bulletSpeed , bulletWeight;

function setup() {
  bulletSpeed=random(223,321);
 bulletWeight=random(30,52);
  thickness=random(22,83);

  createCanvas(1600,700);
  

  bullet=createSprite(200,275,20,10);
  bullet.shapeColor="silver";
  bullet.velocityX=bulletSpeed;
 
  
  wall=createSprite(1000,275,thickness,height/2);
  wall.shapeColor="blue";

  

} 

function draw() {
  background("black");  


  

  if(hasCollided(bullet,wall))
  {
    bullet.velocityX=0;
    var damage=0.5*bulletWeight*bulletSpeed*bulletSpeed/(thickness*thickness*thickness);

    if(damage>10)
    {
      wall.shapeColor="red";
    }

    if(damage<10)
    {
      wall.shapeColor="lime";
    }

  }
  drawSprites();
  

}
function hasCollided(bullet,wall)
  {
    bulletRightEdge = bullet.x + bullet.width;
    wallLeftEdge = wall.x;
    if(bulletRightEdge > wallLeftEdge)
    {
      return true

    }
      return false;
  }