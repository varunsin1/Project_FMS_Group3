



let screen = 0;
let img;
let img2;



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
 
  
  
  buttonColor = createButton ("Pong");
  // This is the game that is fully integrated
  buttonColor.position(250, 365);
   
  buttonRun = createButton("Running Game");
  // Still working on this one
  buttonRun.position(240,435);
  
  
  image (img,0,0,600,600);
  textSize(30)
  fill('black')
  text("Fun Baby Challenge Games!",120,100);
  text("Play Now!",220,300);
  
  buttonRun.mousePressed(displayRunInstructions);
  buttonColor.mousePressed(displayColorInstructions);

}






function displayRunInstructions(){
  screen = 1;
  image (img,0,0,600,600);
  
  
  text("Instructions: Press spacebar to avoid objects",0,50)
  text("Keep running until you reach the end!",50,80)
  buttonRun.hide();
  buttonColor.hide();
  buttonStart=createButton("Start")
  buttonStart.position(300,400);
  
  buttonMainMenu = createButton("Main Menu")
  buttonMainMenu.position(400,400);
   
  buttonMainMenu.mousePressed( BackToSetUp);
  
  buttonStart.mousePressed(RunningGame);
  
 
}

function displayColorInstructions(){
    image (img,0,0,600,600);
  
  text("Instructions: A pattern will be shown",50,50)
  text("and you must repeat the pattern",50,80)
  buttonRun.hide();
  buttonColor.hide();
  buttonStart=createButton("Start")
  buttonStart.position(300,400);
  
  buttonMainMenu = createButton("Main Menu")
  buttonMainMenu.position(400,400);
   
  buttonMainMenu.mousePressed(BackToSetUp);
     buttonStart.mousePressed(pongSetup) ;
  
  
  
  
}

function draw(){
  if(screen == 1){
    PongkeyPressed()
    Pongdraw();
     
    
    
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




   

  
  
//ColorGameScreen


 


