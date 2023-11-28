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
let y = 476;
let vy = 0;
let x = 45;

function RunSetup() {
  screen = 2;
  buttonStart.hide();
  buttonMainMenu.size(80,40);
  buttonMainMenu.position(1350,595);
  createCanvas(1440, 650);
  // back = loadImage("stars.png");
  fence1 = loadImage("fence1.png");
  grass = loadImage("grass.png");
  pet = loadImage("pet.png");
  // jumpnoise = loadSound("Run/jump.mp3");
  // meow = loadSound("Run/meow.mp3");
  score = 0;
  lose = false;
  fences = [];
  next = 0;
  cat = new Cat();
  new Fence();
  randint = int(random(1, 3));
  loop();
}

function RunDraw() {
  back1.resize(1440,0);
  image(back1,0,0,back1.width,back1.height);
  image(grass,0,450,grass.width,grass.height);
  grass.resize(1440,0);
  
  cat.show();
  cat.move();
  
  textStyle(ITALIC);
  textSize(21)
  fill("black")
  text("Space, ↑, or Mouse1 to Jump",581,605)
  textSize(25)
  textStyle(BOLD);
  text("Cat Walk", 668, 60)
  text(round(score), 1360, 60); 
  
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
      text("Game Over!", 650, 202);
      text("Score: " + round(score), 667, 246);
      textSize(21)
      textStyle(ITALIC);
      text("Press Any Key to Reset",608,284)
      lose = true;
      noLoop();
    }
  }
}

function mousePressed(){
  if(y == 476 && mouseIsPressed && mouseY <= 476 && screen == 2){
    cat.jump();
    jumpnoise.play();
    vy = -jump;
    if(lose){
      RunSetup();
    }
  }
  if(lose && mouseIsPressed && mouseY <= 476 && screen == 2){
     RunSetup();
  }
}

function keyPressed() {
  if (keyCode === 32 && y == 476 && keyIsPressed && screen == 2) {
    cat.jump();
    jumpnoise.play();
    vy = -jump;
    if(lose){
      RunSetup();
    }
  }
  if(lose && keyIsPressed && screen == 2){
     RunSetup();
  }
  else if (keyCode === 38 && y == 476 && keyIsPressed && screen == 2) {
    cat.jump();
    jumpnoise.play();
    vy = -jump;
    if(lose){
      RunSetup();
    }
  }
}
