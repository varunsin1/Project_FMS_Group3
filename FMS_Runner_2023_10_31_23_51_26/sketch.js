const g = 1.5998;
const jump = 15;
const ground = 70;

let y, vy;
let frame = 0;
let score = 0;
let obstacles;

function preload(){
  run = loadImage("cat.png")
  y = 161;
  vy = 0;
}

function setup() {
  createCanvas(440, 270);
}

function draw() {
  background(220);
  
  let gy = height - ground;
  line(0,gy,width,gy);
  
  textSize(16)
  text("Cat Walk", 188, 40)
  
  score += 0.06;
  text(round(score), 390, 40);
  
  //sprite animation
  image(run, 45, y, 52, run.height,52*floor(frame), 0, 52,run.height);
  frame += 0.17;
  if (frame > 3) {
      frame = 0;
    }
  y += vy;
  if(y < 161){
    vy += g;
  }
  else{
    vy = 0;
    y = 161;
  }
}

function mousePressed(){
  if(y>= 161){
    vy = -jump;
  }
}

function keyPressed() {
  if (keyCode === 32 && y == 161) {
    vy = -jump;
  } else if (keyCode === 38) {
    vy = -jump;
  }
}
