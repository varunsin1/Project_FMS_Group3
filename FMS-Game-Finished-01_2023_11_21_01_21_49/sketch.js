let screen;
let img;
let img2;
let img3;
let img4;
let img5;
let jumpnoise;
let meow;

function preload(){
  var buttonpong;
  var buttonRun; 
  var buttonStart;
  var buttonMainMenu;
  jumpnoise = loadSound("Run/jump.mp3");
  meow = loadSound("Run/meow.mp3");
  img = loadImage("6070910050104917612.jpg");
  img3 = loadImage("pet.png");
  img4 = loadImage("pet.png");
  img5 = loadImage("pet.png");
}


function setup () {
  screen = 0;
  createCanvas(400, 400);
  let col  = color('red');
  let col2 = color("green");
  buttonpong = createButton ("Pong");
  buttonpong.style('font-size', '19px');
  buttonpong.style('background-color', col);
  buttonpong.position(170, 215);
   
  buttonRun = createButton("Running Game");
  buttonRun.style('font-size', '19px');
  buttonRun.style('background-color', col2);
  buttonRun.position(128,290);
  
  image (img,0,0,400,400);
  
  // cat images go here
  fill('black')
  textSize(20)
  fill('black')
  textStyle(BOLD);
  text("Fun Baby Challenge Games!",80,100);
  text("Choose your activity!",99,160);
  
  buttonpong.mousePressed(displayPongInstructions);
  buttonRun.mousePressed(displayRunInstructions);

}

function displayRunInstructions(){
  image (img,0,0,600,600);
  text("Instructions: Press spacebar to avoid objects",0,50)
  text("Keep running until you reach the end!",50,80)
  buttonRun.hide();
  buttonpong.hide();
  buttonStart=createButton("Start")
  buttonStart.position(100,300);
  buttonMainMenu = createButton("Main Menu")
  buttonMainMenu.position(250,300);
  if(buttonMainMenu.mousePressed(BackToSetUp)){
    screen = 0;
  }
  buttonStart.mousePressed(RunSetup);
}

function displayPongInstructions(){
  image (img,0,0,600,600);
  fill('red')
  text("Instructions: Click on the screen and ",20,50)
  text("use the up and down arrows to bounce ",20,80)
  text("bounce the ball  towards opponents side.  ",20,110)
  text("Do this 6 times to win!",20,140)
  
  buttonRun.hide();
  buttonpong.hide();
  buttonStart=createButton("Start")
  buttonStart.position(200,200); 
  buttonMainMenu = createButton("Main Menu")
  buttonMainMenu.position(150,300); 
  if(buttonMainMenu.mousePressed(BackToSetUp)){
    screen = 0;
  }
  buttonStart.mousePressed(PongSetup) ; 
}

function draw(){
  if(screen == 1){
    PongkeyPressed()
    Pongdraw();
  }
  if(screen == 2){
    RunDraw();
    mousePressed();
    keyPressed();
  }
}

function BackToSetUp(){
  setup();
  buttonMainMenu.hide();
  buttonStart.hide();
} 