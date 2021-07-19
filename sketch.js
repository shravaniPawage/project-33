var bg,snow1,snow,snow3;

function preload(){
  bg=loadImage("snow1.jpg")
snow1=loadImage("snow4.webp")
}

function setup() {
  createCanvas(800,400);
 
 snow= createSprite(400, 200, 50, 50);
 snow.addImage(snow1);
snow.scale=0.06
 snow.velocityY=1;
}

function draw() {
  background(bg); 


spawnsnow();
  drawSprites();
}
function spawnsnow() {
  if(frameCount %80 === 0){ 
snow2=createSprite(random(50,590),10,50,10)
snow2.addImage(snow1);
   snow2.scale = 0.07
  snow2.lifetime = 300
  snow2.velocityY = 2;

}
}