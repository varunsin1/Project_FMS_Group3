let screen;
let img;
let img2;
let img3;
let img4;
let img5;
let img6
let img7
let img8;
// let jumpnoise;
// let meow;

function preload(){
  var buttonpong;
  var buttonRun; 
  var buttonStart;
  var buttonMainMenu;
  // jumpnoise = loadSound("Run/jump.mp3");
  // meow = loadSound("Run/meow.mp3");
  img = loadImage("6070910050104917612.jpg");
  img3 = loadImage("pet.png");
  img4 = loadImage("pet.png");
  img5 = loadImage("pet.png");
  img6 = loadImage("pet.png");
  img7 = loadImage("pet.png");
  img8 = loadImage("pet.png");
}


function setup () {
  screen = 0;
  createCanvas(400, 400);
  let col  = color('rgb(245,98,98)');
  let col2 = color("lightgreen");
  buttonpong = createButton ("Pong");
  buttonpong.style('font-size', '19px');
  buttonpong.style('background-color', col);
  buttonpong.position(170, 215);
   
  buttonRun = createButton("Running Game");
  buttonRun.style('font-size', '19px');
  buttonRun.style('background-color', col2);
  buttonRun.position(128,290);
  
  image (img,0,0,400,400);
  image (img3,10,30,70,30)
  image (img4,140,30,70,30)
  image (img5,270,30,70,30)
  image (img6,270,350,70,30)
  image (img7,140,350,70,30)
  image (img8,10,350,70,30)
  
  // cat images go here
  
  textSize(20)
  fill('rgb(97,195,223)')
  textStyle(BOLD);
  text("Fun Baby Challenge Games!",70,100);
  text("Choose your activity!",99,160);
  stroke("black");
  fill('rgb(245,98,98)')
  rect(10,200, 20,100);
  rect(360,100, 20,100);
  
  buttonpong.mousePressed(displayPongInstructions);
  buttonRun.mousePressed(displayRunInstructions);

}

function displayRunInstructions(){
  image (img,0,0,600,600);
  fill("green")
  textStyle(BOLD);
  textSize(30)
  text("Instructions:",120,50)
  textSize(20)
  text("Use the spacebar or touchpad to make ",20,80)
  text("the cat jump over the fence.",80,120)
  text("Keep jumping until you hit the object.",20,160)
  text("See how high your score can go!",50,200)
  buttonRun.hide();
  buttonpong.hide();
  let col = color('lightgreen');
  buttonStart=createButton("Start")
   buttonStart.style('font-size', '19px');
  buttonStart.style('background-color', col)
  buttonStart.position(100,300);
  buttonMainMenu = createButton("Main Menu")
  buttonMainMenu.style('font-size', '19px');
  buttonMainMenu.style('background-color', col)
  buttonMainMenu.position(250,300);
  if(buttonMainMenu.mousePressed(BackToSetUp)){
    screen = 0;
  }
  buttonStart.mousePressed(RunSetup);
}

function displayPongInstructions(){
  image (img,0,0,600,600);
  fill('rgb(199,1,1)')
  textSize(30)
text("Instructions:", 120, 50);
  textSize(20)
  text("This is a two player game!", 70, 100);
  textSize(20)
  text("Use w and s or the up and down arrows   ", 5, 140);
  text("to bouce to ball to the oppponets side.", 5, 180);
  text("Do this 7 times to win!", 80,220);
  
  buttonRun.hide();
  buttonpong.hide();
  let col = color('rgb(245,98,98)');
  buttonStart=createButton("Start")
  buttonStart.style('font-size', '19px');
  buttonStart.style('background-color', col)
  buttonStart.position(100,300); 
  buttonMainMenu = createButton("Main Menu")
  buttonMainMenu.style('font-size', '19px');
  buttonMainMenu.style('background-color', col)
  buttonMainMenu.position(250,300); 
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