let img;
let img2

let currentActivity = 0;

function preload(){
  var button;
 
  var button2;
  var button3;
  img=loadImage("6070910050104917612.jpg");
  img2= loadImage("6070910050104917612.jpg");
  runnerPreload();
  
}


function setup() {
  createCanvas(600, 600);
  currentActivity = 0;
  
  
  button = createButton ("Color Match");
  button.position(250, 365);
   
  button2 = createButton("Running Game");
  button2.position(240,435);
  
  
  image (img,0,0,600,600);
  textSize(30)
  fill('black')
  text("Fun Baby Challenge Games!",120,100);
  text("Play Now!",220,300);
  button2.mousePressed(runnerSetup)
}

function draw(){
  switch(currentActivity){
    case 0:
      mainMenu();
      break;
    case 1:
      runnerDraw();
      break;
  }
}


function display(){
  image (img,0,0,600,600);
  
  text("Instructions: A pattern will be shown",50,50)
  text("and you must repeat the pattern",50,80)
  button2.position(2400,4350);
  button.position(2400,4350);
  button3=createButton("Start")
  button3.position(300,400);
  
  
}


