
var monkey , monkey_running;
var ground;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;


function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
 // createCanvas(600, 400);
  ground=createSprite(400, 350, 900 ,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  
  
  monkey=createSprite(40, 315, 20, 20);
  monkey.addAnimation("monkey", monkey_running);
  monkey.scale=0.1;
  
  var survivalTime = 0;
  score=0;
  
  FoodGroup = new Group();
  obstaclesGroup = new Group();
  
 
}


function draw() {
  background("white");
if(keyDown("space")) {
  monkey.velocityY= -12;
    
   }
  monkey.velocityY= monkey.velocityY +0.8; 
  
  //console.log(ground.x);
  
  monkey.collide(ground);
   
      
  if(ground.x<0){
    ground.x=ground.width/2;
  } 
  
     if(obstaclesGroup.isTouching(monkey)){
       ground.velocityX=0;
       monkey.velocityX=0;
       
       obstaclesGroup.setVelocityXEach(0);
       FoodGroup.setVelocityXEach(0);
       
       obstaclesGroup.setLifetimeEach(-1);
       FoodGroup.setLifetimeEach(-1);
     }
     
     
   spawnFood();
   spawnObstacles();
  
  drawSprites();

  
}

function spawnFood(){
  if(frameCount % 80 === 0){
    banana=createSprite(600, 250, 40, 10);
    banana.y=random(120, 200);
    banana.velocityX=-5;
    banana.lifetime=300;
    monkey.depth=banana.depth+1;
    banana.addImage("bananaImage", bananaImage);
    banana.scale=0.05;
    FoodGroup.add(banana);
  }
}

function spawnObstacles(){
  if(frameCount % 300 === 0){
    obstacle = createSprite(600, 330, 10, 40);
    obstacle.velocityX = -6;
    obstacle.addImage("obstacleImage", obstacleImage);
    obstacle.scale=0.1;
    obstaclesGroup.add(obstacle);
  }
}


