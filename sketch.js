var car, wall;
var speed, weight;

function setup() {
  createCanvas(800,400);

  speed= random(55,90);
  weight = random(400,1500);

  wall=createSprite(700, 200, 20, 200);
  wall.shapeColor=color(80,80,80);
  car = createSprite(50,200,50,50);
  car.shapeColor= "white";
  car.velocityX=speed;

}

function draw() {
  background(0);  

  if(wall.x-car.x<=car.width/2+wall.width/2){
    car.velocityX=0;

    var deformation = (0.5*speed*speed*weight)/22500;

    if(deformation<100){
      car.shapeColor = color(0,255,0);

    }
    else if(deformation>100 && deformation<180){
      car.shapeColor="yellow";
    }
    else if(deformation>180){
      car.shapeColor= "red";
    }




  }


  drawSprites();
}