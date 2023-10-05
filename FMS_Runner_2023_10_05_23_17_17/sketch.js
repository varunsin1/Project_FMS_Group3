
function preload(){
  run = loadImage("cat.png")
}

function Sprite(sheet, x, y){
  this.sheet = sheet;
  this.x = x;
  this.y = y;
  this.h = run.height;
  this.w = 52;
  this.frame = 0;
  
  this.draw = function() {
    image(this.sheet, this.x, this.y, this.w, this.h,this.w*floor(this.frame), 0, this.w,this.h)
    
    this.frame += 0.17
    if (this.frame > 3) {
      this.frame = 0
    }
  }
}

function setup() {
  createCanvas(400, 270);
  cat = new Sprite(run, 10, 161);
  cat.friction = 0.01;
  cat.maxSpeed = 5;
}

function draw() {
  background(220);
  line(0,200,400,200);
  cat.draw()
}

function keyPressed(){
  if(keyCode === 32) {
    jump(cat)
  } else if (keyCode === 38) {
    jump(cat)
  }
}