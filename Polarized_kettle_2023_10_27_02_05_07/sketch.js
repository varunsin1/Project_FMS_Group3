// make if stament incrementation to "load" games
// conditons: buttonStart.Ispressed && count + 1;
let img;
let img2


function preload(){
  var buttonColor;
 var buttonRun;
  
  var buttonStart;
  var buttonMainMenu;
  
  img=loadImage("6070910050104917612.jpg");
  img2= loadImage("6070910050104917612.jpg");
  
  
}


function  setup () {
  createCanvas(600, 600);
 
  
  
  buttonColor = createButton ("Color Match");
  buttonColor.position(250, 365);
   
  buttonRun = createButton("Running Game");
  buttonRun.position(240,435);
  
  
  image (img,0,0,600,600);
  textSize(30)
  fill('black')
  text("Fun Baby Challenge Games!",120,100);
  text("Play Now!",220,300);
  
  buttonRun.mousePressed(displayRun);
  buttonColor.mousePressed(displayColor);

}





function displayRun(){
  image (img,0,0,600,600);
  
  text("Instructions: Press spacebar to avoid objects",0,50)
  text("Keep running until you reach the end!",50,80)
  buttonRun.position(2400,4350);
  buttonColor.position(2400,4350);
  buttonStart=createButton("Start")
  buttonStart.position(300,400);
  
  buttonMainMenu = createButton("Main Menu")
  buttonMainMenu.position(400,400);
   
  buttonMainMenu.mousePressed(BackToSetUp);
  
  buttonStart.mousePressed(RunningGame)
  
 
}

function displayColor(){
    image (img,0,0,600,600);
  
  text("Instructions: A pattern will be shown",50,50)
  text("and you must repeat the pattern",50,80)
  buttonRun.position(2400,4350);
  buttonColor.position(2400,4350);
  buttonStart=createButton("Start")
  buttonStart.position(300,400);
  
  buttonMainMenu = createButton("Main Menu")
  buttonMainMenu.position(400,400);
   
  buttonMainMenu.mousePressed(BackToSetUp);
     buttonStart.mousePressed(ColorGame) ;
  
  
  
  
}

function BackToSetUp(){
  setup();
  buttonMainMenu.hide();
  buttonStart.hide();
  
  
  
  
}

function RunningGame(){
   image (img,0,0,600,600);
  buttonStart.hide();
   

  
  
  
  
  
}

function ColorGame(){
  image (img,0,0,600,600);
  buttonStart.hide();
  
  
}
 

