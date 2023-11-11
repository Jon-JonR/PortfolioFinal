var ballx = 300;
var bally = 300;
var ballSize = 40;
var score =0;
var gameState= "L1";
var img, img2, img3, img4, img5; //image variable

function preload() {
// preload() runs once, it may make you wait
//  img = loadImage('cat.jpg');  // cat.jpg needs to be next to this .js file
// you can link to an image on your github account
  img = loadImage('https://jon-jonr.github.io/PortfolioFinal/Minyako.png');
  img2 = loadImage('https://jon-jonr.github.io/PortfolioFinal/Pudding.png');
  img3 = loadImage('https://jon-jonr.github.io/PortfolioFinal/Town.png');
  img4 = loadImage('https://jon-jonr.github.io/PortfolioFinal/Mansion.png');
  img5 = loadImage('https://jon-jonr.github.io/PortfolioFinal/Kitchen.png');
}


function setup() {
  createCanvas(600, 600);
  textAlign(CENTER);
  textSize(20);
} // end setup


function draw() {
    image(img5, 0, 0, width, height);
  if (gameState=="L1"){
  levelOne();
  } 
  if (gameState=="L2"){
   levelTwo(); 
  }
  if (gameState=="L3"){
   levelThree(); 
  }
    if (gameState=="win"){
     text("Miyako is full nano!! Thanks for helping me find the pudding!", width/2, height-400);
  }
  text(("Score: " + score), width/2, 40);
  

} // end draw


function levelOne(){
    background(200, 100, 200);
      image(img5, 0, 0, width, height);
  text("Level 1: Kitchen (Get the Pudding Nano!)", width/2, height-20);
  var distToBall= dist(ballx, bally, mouseX, mouseY);
  if (distToBall <ballSize/2){
    ballx = random(width);
    bally= random(height);
    score= score +125;
  }
  if(score>=1250){
// call level 2
 // fill(random(255));
 gameState= "L2";
  }
  
        image(img2, ballx-ballSize/2, bally-ballSize/2, ballSize, ballSize);
  line(ballx, bally, mouseX, mouseY);
  image(img, mouseX, mouseY, ballSize, ballSize);
} // end level one

function levelTwo(){
    background(200, 100, 200);
      image(img3, 0, 0, width, height);
  text("Level 2: Town: Keep going nano!", width/2, height-20);
  var distToBall= dist(ballx, bally, mouseX, mouseY);
  if (distToBall <ballSize/2){
    ballx = random(width);
    bally= random(height);
    score= score +125;
  }
  if(score>=3000){
// lvel 3
   gameState = "L3";

  }
  image(img, mouseX, mouseY, ballSize, ballSize);
//  line(ballx, bally, mouseX, mouseY);

      image(img2, ballx-ballSize/2, bally-ballSize/2, ballSize, ballSize);
  
  
} // end level two

function levelThree(){
    background(200, 100, 200);
      image(img4, 0, 0, width, height);
      image(img, mouseX, mouseY, ballSize, ballSize);
  text("Level 3: Mansion (The last stretch! Finish it nano!)", width/2, height-20);
  var distToBall= dist(ballx, bally, mouseX, mouseY);
  if (distToBall <ballSize/2){
    ballx = random(width);
    bally= random(height);
    ballSize=ballSize -1;
    score= score +125;
  }
  if(score>=4500){
// level 4
   gameState = "win";
   

  }
  
//  line(ballx, bally, mouseX, mouseY);
  
        image(img2, ballx-ballSize/2, bally-ballSize/2, ballSize, ballSize);
} // end level thre
