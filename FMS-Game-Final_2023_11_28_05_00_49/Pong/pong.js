let r_p;
let l_p;
let ball;

let score1 = 0;
let score2 = 0;
let game;
// let button;

function PongSetup() {
  screen = 1;
  buttonStart.hide();
  buttonMainMenu.size(80,40);
  buttonMainMenu.position(1350,595);
  // button=createButton('Reset');
  // button.position(0,400);
  // button.mousePressed(PongSetup);
  // createCanvas(400, 400);
  createCanvas(1440,650)
  rectMode(CENTER);
  score1 = 0;
  score2 = 0;
  game = false;
  l_p= new Peddle(10);
  r_p = new Peddle(1430);
  ball = new Ball();
  loop();
}

function PongkeyPressed()
{
    if(keyCode == UP_ARROW && keyIsPressed){
      r_p.change_dir(-5);
    }
  
    if(keyCode == DOWN_ARROW && keyIsPressed){
      r_p.change_dir(5);
    }
  
   if(keyCode ==87 && keyIsPressed){
      l_p.change_dir(-5);
    }
  
    if(keyCode ==83 && keyIsPressed){
      l_p.change_dir(5);
    }
}

function Pongdraw() {
  // image(img,0,0,img.width,img.height);
  // img.resize(400,0);
  img.resize(1440,0);
  image(img,0,0,img.width,img.height);
  //background(30);
  textSize(28);
  text("Player 1",50,100)
  text(score1,90,70);
  text("Player 2",1288,100)
  text(score2,1328,70);
  button.show();
  
  l_p.show();
  r_p.show();
  l_p.move();
  r_p.move();
  r_p.update();
  l_p.update();
  ball.show();
  ball.move();
  ball.update();
  
  //if ball goes outside
  if (ball.x>=width)
  {
    score1++
    ball.reset();
  }
  
    if (ball.x<=0)
  {
    score2++;
    ball.reset();
    
  }
  //detect collision
  
  if(ball.x>=1420 && ball.y<=(r_p.y+50) && ball.y>=(r_p.y-50))
  {
    ball.vx *=-1;
  }
  
    if(ball.x<=20 && ball.y<=(l_p.y+50) && ball.y>=(l_p.y-50))
  {
    ball.vx *=-1;
  }
  
  if(score2 == 7 || score1 == 7){
    if(score2 == 7){
      text("Winner Player 2", 621, 280)
    }
    else {
      text("Winner Player 2", 621, 280)
    }
    game = true;
  }
  if(game == true){
    noLoop();
  }
}