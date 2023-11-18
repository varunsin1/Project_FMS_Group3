
let img;
let img2;

let img3;
let img4;
let img5;
let img6;
let img7;
let img8;


function preload(){
 
  
  var buttonpong;
 var buttonRun; 
  var buttonStart;
  var buttonMainMenu;
   
  img=loadImage("6070910050104917612.jpg");
  img2= loadImage("6070910050104917612.jpg");
  img3 = loadImage("pet.png");
  img4 = loadImage("pet.png");
  img5 = loadImage("pet.png");
  img6 = loadImage("pet.png");
img7 = loadImage("pet.png");
img8 = loadImage("pet.png");



 

}


function  setup () {
  screen = 0;
  createCanvas(400, 400);
  let col  = color('red');
  let col2 = color("lightgreen");
  buttonpong = createButton ("Pong");
  buttonpong.style('font-size', '19px');
  buttonpong.style('background-color', col);
  buttonpong.position(180, 200);
   
  buttonRun = createButton("Running Game");
   buttonRun.style('font-size', '19px');
  buttonRun.style('background-color', col2);
  buttonRun.position(180, 200);
  buttonRun.position(150,250);
  
  image (img,0,0,400,400);
  image (img3,50,50,70,30);
  image (img4,150,50,70,30);
   image (img5,250,50,70,30);
  image (img6,50,350,70,30);
   image (img7,160,350,70,30);
   image (img8,250,350,70,30);
   
   
  // cat images go here
  fill('black')
 
  textSize(20)
  fill('black')
  textStyle(BOLD);
  text("Fun Baby Challenge Games!",80,100);
  text("Choose your activity!",110,150);
  
  buttonRun.mousePressed(displayRunInstructions);
  buttonpong.mousePressed(displayPongInstructions);

}

function displayRunInstructions(){
  image (img,0,0,600,600);
  text("Instructions: Press spacebar to avoid objects",0,50)
  text("Keep running until you reach the end!",50,80)
  buttonRun.hide();
  buttonpong.hide();
  buttonStart=createButton("Start")
  buttonStart.position(300,400);
  buttonMainMenu = createButton("Main Menu")
  buttonMainMenu.position(400,400);
  buttonMainMenu.mousePressed( BackToSetUp);
  buttonStart.mousePressed(RunSetup);
}

function displayPongInstructions(){
    image (img,0,0,600,600);
  fill('red')
    textSize(19)
  text("Instructions: Two playes can play! Use  ",20,50)
  text("the up and down arrows and w and s keys to ",20,80)
  text("bounce the ball  towards opponents side.  ",20,110)
  text("Do this 7 times to win!",20,140)
  
  buttonRun.hide();
  buttonpong.hide();
  buttonStart=createButton("Start")
  buttonStart.position(200,200); 
  buttonMainMenu = createButton("Main Menu")
  buttonMainMenu.position(150,300); 
  buttonMainMenu.mousePressed(BackToSetUp);
  buttonStart.mousePressed(PongSetup) ; 
}

function draw(){
  if(screen == 1){
    PongkeyPressed()
    Pongdraw();
  
  }else if(screen == 2){
     RunSetup();      
}
}

function BackToSetUp(){
  setup();
  buttonMainMenu.hide();
  buttonStart.hide();
}
//Running GAme SCreen
function RunningGame(){
    image (img,0,0,600,600);
  buttonStart.hide();
  buttonMainMenu.position(200,250);
} 

function RunSetup(){
  
  image (img,0,0,400,400);
  
}