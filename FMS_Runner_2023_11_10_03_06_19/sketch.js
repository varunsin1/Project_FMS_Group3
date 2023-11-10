const g = 1.5998;
const jump = 16;
const ground = 70;

let y, vy, x;
let score = 0;
let fences;
let fence1;
let frame = 0;
let next;
let randint;
let lose;


function preload(){
  back = loadImage("stars.png");
  fence1 = loadImage("fence1.png");
  grass = loadImage("grass.png");
  pet = loadImage("pet.png");
  sound = loadSound("jump.mp3");
  meow = loadSound("meow.mp3");
  y = 161;
  vy = 0;
  x = 45;
}

function setup() {
  createCanvas(440, 270);
  //cat = new Cat();
  reset();
}

function reset(){
  score = 0;
  lose = false;
  fences = [];
  next = 0;
  cat = new Cat();
  new Fence();
  randint = int(random(50, 150));
  loop();
}

function draw() {
  image(back,0,0,back.width,back.height);
  back.resize(440,0);
  image(grass,0,190,grass.width,grass.height);
  grass.resize(440,0);
  
  cat.show();
  cat.move();
  
  textStyle(ITALIC);
  textSize(12)
  text("Space, ↑, or Mouse1 to Jump",141,255)
  textSize(16)
  textStyle(BOLD);
  text("Cat Walk", 188, 40)
  text(round(score), 390, 40); 
  
  next += 1;
  if (next == randint) {
    fences.push(new Fence())
    score += 1
    next = 0
    randint = int(random(40, width/5))
  }
  for(let f of fences){
    if (f.x < 0) {
      if (fences.length > 3) {
        fences.shift()
      }
    }
    f.move();
    f.show();
    if(cat.hits(f)){
      meow.play();
      text("Score: " + round(score), 190, 124);
      text("Game Over!", 176, 101);
      textSize(12)
      textStyle(ITALIC);
      text("Press Any Key to Reset",156,150)
      lose = true;
      noLoop();
    }
  }
}

function mousePressed(){
  if(y>= 161){
    cat.jump();
    sound.play();
    vy = -jump;
    if(lose){
      reset();
    }
  }
}

function keyPressed() {
  if (keyCode === 32 && y == 161) {
    cat.jump();
    sound.play();
    vy = -jump;
    if(lose){
      reset();
    }
  } 
  if(keyIsPressed && lose){
    reset();
  }
  else if (keyCode === 38 && y == 161) {
    cat.jump();
    sound.play();
    vy = -jump;
    if(lose){
      reset();
    }
  }
}
