var img;
var initials ='JRg'; // your initials
var choice = '1'; // starting choice, so it is not empty
var screenbg = 250; // off white background
var lastscreenshot=61; // last screenshot never taken

function preload() {
// preload() runs once, it may make you wait
//  img = loadImage('cat.jpg');  // cat.jpg needs to be next to this .js file
// you can link to an image on your github account
  img = loadImage('https://dma-git.github.io/images/74.png');
  img2= loadImage('https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Triangulum_Galaxy_%28transparent_background%29.png/1200px-Triangulum_Galaxy_%28transparent_background%29.png');
}

function setup() {
createCanvas(600, 400);  // canvas size
background(screenbg);   // use our background screen color

}

function draw() {
  if (keyIsPressed) {
    choice = key; // set choice to the key that was pressed
    clear_print(); // check to see if it is clear screen or save image
  }
  if (mouseIsPressed){
    newkeyChoice(choice);  // if the mouse is pressed call newkeyChoice
  }
}

function newkeyChoice(toolChoice) { //toolchoice is the key that was pressed
  // the key mapping if statements that you can change to do anything you want.
  // just make sure each key option has the a stroke or fill and then what type of 
  // graphic function

 if (toolChoice == '1' ) {  // first tool
   
  
  ellipse(mouseX, mouseY, 3, 3);
  fill(255, 255, 255);
  stroke(255, 255, 255);
    
  } else if (toolChoice == '2') { // second tool

    ellipse(mouseX, mouseY, 40, 40);
    fill(24, 57, 43)
    stroke(24, 57, 43)
  } else if (toolChoice == '3') { // third tool

    ellipse(mouseX, mouseY, 150, 150);
    fill(0, 0, 0);
    stroke(0, 0, 0);
  } else if (toolChoice == '4') {

    fill(255, 255, 255);
    ellipse(mouseX, mouseY, 100, 100);
  } else if (key == '5') { // this tool calls a function
  fill(24, 57, 43)
  stroke(24, 57, 43)
  line(mouseX,mouseY, pmouseX, pmouseY)
 // make testbox do something!
 //   line(mouseX, mouseY, pmouseX, pmouseY);
  } else if (toolChoice == '6') {

    fill(random(60), random(60), random(60));
    ellipse(mouseX, mouseY, 150, 150);
    stroke(0, 0, 0)
  } else if (toolChoice == '7') {

 image(img2, mouseX, mouseY, 100, 100);
  } else if (toolChoice == '8') {
  fill(24, 79, 43)
  stroke(24, 79, 43)
  line(mouseX,mouseY, pmouseX, pmouseY)
  } else if (toolChoice == '9') {

  ellipse(mouseX, mouseY, 6, 6);
  fill(255, 255, 255);
  stroke(255, 255, 255);
  } else if (toolChoice == '0') {
    ellipse(mouseX, mouseY, 150, 150);
    fill(10, 10, 10);
    stroke(10, 10, 10);
    
  }
 }
 
function testbox(r, g, b) {
// this is a test function that will show you how you can put your own functions into the sketch
  x = mouseX;
  y = mouseY;
  fill(r, g, b);
  rect(x-50, y-50, 100, 100);

}

function clear_print() {
// this will do one of two things, x clears the screen by resetting the background
// p calls the routine saveme, which saves a copy of the screen
  if (key == 'x' || key == 'X') {
    background(screenbg); // set the screen back to the background color
  } else if (key == 'p' || key == 'P') {
     saveme();  // call saveme which saves an image of the screen
  }
}

function saveme(){
    //this will save the name as the intials, date, time and a millis counting number.
    // it will always be larger in value then the last one.
  filename=initials+day() + hour() + minute() +second();
  if (second()!=lastscreenshot) { // don't take a screenshot if you just took one
    saveCanvas(filename, 'jpg');
    key="";
  }
  lastscreenshot=second(); // set this to the current second so no more than one per second
  
}
