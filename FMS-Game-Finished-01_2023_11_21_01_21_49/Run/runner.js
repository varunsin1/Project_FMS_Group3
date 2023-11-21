const g = 1.5998;
const jump = 16;
const ground = 70;

let score = 0;
let fences;
let fence1;
let frame = 0;
let next;
let randint;
let lose;
let y = 161;
let vy = 0;
let x = 45;

function RunSetup() {
  screen = 2;
  buttonStart.hide();
  buttonMainMenu.position(320,400);
  createCanvas(440, 270);
  back = loadImage("stars.png");
  fence1 = loadImage("fence1.png");
  grass = loadImage("grass.png");
  pet = loadImage("pet.png");
  jumpnoise = loadSound("Run/jump.mp3");
  meow = loadSound("Run/meow.mp3");
  score = 0;
  lose = false;
  fences = [];
  next = 0;
  cat = new Cat();
  new Fence();
  randint = int(random(50, 150));
  loop();
}

function RunDraw() {
  image(back,0,0,back.width,back.height);
  back.resize(440,0);
  image(grass,0,190,grass.width,grass.height);
  grass.resize(440,0);
  
  cat.show();
  cat.move();
  
  textStyle(ITALIC);
  textSize(12)
  fill("black")
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
  if(y >= 161 && mouseIsPressed && mouseY <= 270 && screen == 2){
    cat.jump();
    jumpnoise.play();
    vy = -jump;
    if(lose){
      RunSetup();
    }
  }
}

function keyPressed() {
  if (keyCode === 32 && y == 161 && keyIsPressed && screen == 2) {
    cat.jump();
    jumpnoise.play();
    vy = -jump;
    if(lose){
      RunSetup();
    }
  } 
  else if (keyCode === 38 && y == 161 && keyIsPressed && screen == 2) {
    cat.jump();
    jumpnoise.play();
    vy = -jump;
    if(lose){
      RunSetup();
    }
  }
}
