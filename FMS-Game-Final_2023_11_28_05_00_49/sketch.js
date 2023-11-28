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
  feature = loadImage("feature.png");
  feature1 = loadImage("feature.png");
  feature2 = loadImage("feature.png");
  feature3 = loadImage("feature.png");
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
  feature.resize(150,0);
  image (feature, 285, 27);
  feature1.resize(150,0);
  image(feature1,285,582);
  feature2.resize(150,0);
  image(feature2,1005,582);
  feature3.resize(150,0);
  image(feature3,1005,27);
  
  button = createButton("Reset");
  button.size(80,40);
  button.position(10,595);
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
  image (img3,30,30)
  image (img4,700,30)
  image (img5,1370,30)
  image (img6,30,585)
  image (img7,700,585)
  image (img8,1370,585)
  feature.resize(150,0);
  image (feature, 285, 27);
  feature1.resize(150,0);
  image(feature1,285,582);
  feature2.resize(150,0);
  image(feature2,1005,582);
  feature3.resize(150,0);
  image(feature3,1005,27);
  fill("green")
  textStyle(BOLD);
  textSize(30)
  text("Instructions:", 625, 150);
  textSize(20)
  textStyle(ITALIC);
  text("One Player Needed", 1259/2, 200);
  textStyle(BOLD);
  text("Controls: Space, Up Arrow, or Mouse Click to Jump",950/2,250)
  text("Jump Over the Fences",1226/2,310)
  text("See how high your score can go!",1128/2,340)
  buttonRun.hide();
  buttonpong.hide();
  // let col = color('lightgreen');
  buttonStart=createButton("Start")
  buttonStart.size(80,40);
  buttonStart.position(550,450);
  buttonMainMenu = createButton("Main Menu")
  buttonMainMenu.size(80,40);
  buttonMainMenu.position(800,450);
  if(buttonMainMenu.mousePressed(BackToSetUp)){
    screen = 0;
  }
  buttonStart.mousePressed(RunSetup);
}

function displayPongInstructions(){
  image(back,0,0,1440,900);
  image (img3,30,30)
  image (img4,700,30)
  image (img5,1370,30)
  image (img6,30,585)
  image (img7,700,585)
  image (img8,1370,585)
  feature.resize(150,0);
  image (feature, 285, 27);
  feature1.resize(150,0);
  image(feature1,285,582);
  feature2.resize(150,0);
  image(feature2,1005,582);
  feature3.resize(150,0);
  image(feature3,1005,27);
  fill('rgb(199,1,1)')
  textSize(30)
  textStyle(BOLD);
  text("Instructions:", 630, 150);
  textSize(20)
  textStyle(ITALIC);
  text("Two Players Needed", 624, 200);
  textStyle(BOLD);
  text("Player 1: Use W and S", 615, 250);
  text("Player 2: Use Up and Down Arrow", 1118/2, 280);
  text("Hit the ball to the other side", 1177/2, 330);
  text("Do this 6 times to win!",1229/2,360);
  buttonRun.hide();
  buttonpong.hide();
  // let col = color('rgb(245,98,98)');
  buttonStart=createButton("Start")
  buttonStart.size(80,40);
  buttonStart.position(550,450);
  buttonMainMenu = createButton("Main Menu")
  buttonMainMenu.size(80,40);
  buttonMainMenu.position(800,450);
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