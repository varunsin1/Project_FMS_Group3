let img;
function preload(){
  var button1;
  var button2;
  img=loadImage("6070910050104917612.jpg");
}


function setup() {
  createCanvas(400, 400);
  button1 = createButton ("Color Match");
  button2 = createButton("Running Game");
  
  
  
  
  image (img,0,0,400,400);
  textSize(30)
   fill(200,0,0)
   text("Motor Skills Game!!!",55,100);
  
}


