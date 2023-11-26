let screen;
let img;
let img2;
let img3;
let img4;
let img5;
let jumpnoise;
let meow;
let button;

function preload(){
  var buttonpong;
  var buttonRun; 
  var buttonStart;
  var buttonMainMenu;
  jumpnoise = loadSound("Run/jump.mp3");
  meow = loadSound("Run/meow.mp3");
  back = loadImage("stars.png");
  back1 = loadImage("stars.png");
  back2 = loadImage("stars.png");
  // grass = loadImage("grass.png");
  img = loadImage("6070910050104917612.jpg");
  img3 = loadImage("cat1.png");
  img4 = loadImage("cat1.png");
  img5 = loadImage("cat1.png");
  img6 = loadImage("cat1.png");
  img7 = loadImage("cat1.png");
  img8 = loadImage("cat1.png");
}


function setup () {
  screen = 0;
  createCanvas(1440,651);
  image(back,0,0,1440,900);
  let col  = color('red');
  let col2 = color("green");
  buttonpong = createButton ("Pong");
  buttonpong.style('font-size', '28px');
  buttonpong.style('background-color', col);
  buttonpong.position(680, 360);
   
  buttonRun = createButton("Running Game");
  buttonRun.style('font-size', '28px');
  buttonRun.style('background-color', col2);
  buttonRun.position(617,440);
  
  image (img3,30,30)
  image (img4,700,30)
  image (img5,1370,30)
  image (img6,30,585)
  image (img7,700,585)
  image (img8,1370,585)
  
  button = createButton("Reset");
  button.position(0,400);
  button.mousePressed(PongSetup);
  button.hide();
  
  // cat images go here
  fill('black')
  textSize(28)
  fill('black')
  textStyle(BOLD);
  text("Fun Baby Challenges",576,170);
  textStyle(NORMAL);
  text("Choose your activity!",591,260);
  
  buttonpong.mousePressed(displayPongInstructions);
  buttonRun.mousePressed(displayRunInstructions);

}

function displayRunInstructions(){
  image(back,0,0,1440,900);
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
  // let col = color('lightgreen');
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
  image(back,0,0,1440,900);
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
  // let col = color('rgb(245,98,98)');
  buttonStart=createButton("Start")
  buttonStart.position(100,300);
  buttonMainMenu = createButton("Main Menu")
  buttonMainMenu.position(250,300);
  if(buttonMainMenu.mousePressed(BackToSetUp)){
    screen = 0;
  }
  buttonStart.mousePressed(PongSetup);
}

function draw(){
  if(screen == 1){
    Pongdraw();
    PongkeyPressed()
  }
  if(screen == 2){
    RunDraw();
    mousePressed();
    keyPressed();
  }
}

function BackToSetUp(){
  button.hide();
  setup();
  buttonMainMenu.hide();
  buttonStart.hide();
} 