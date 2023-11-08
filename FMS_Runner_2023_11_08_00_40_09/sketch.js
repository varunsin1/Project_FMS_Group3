const g = 1.5998;
const jump = 16;
const ground = 70;

let y, vy, x;
let score = 0;
let fences = [];
let fence1;
let frame = 0;

function preload(){
  cImg = loadImage("cat1.png");
  back = loadImage("stars.png");
  fence1 = loadImage("fence1.png");
  grass = loadImage("grass.png");
  pet = loadImage("pet.png");
  y = 172;
  vy = 0;
  x = 45;
}

function setup() {
  createCanvas(440, 270);
  cat = new Cat();
}

function draw() {
  image(back,0,0,back.width,back.height);
  back.resize(440,0);
  image(grass,0,190,grass.width,grass.height);
  grass.resize(440,0);
  //line(0,200,width,200);
  
  textSize(16)
  text("Cat Walk", 188, 40)
  
  score += 0.017;
  text(round(score), 390, 40);
  
  cat.show();
  cat.move();
  
  if(random(1) < 0.00755){
     fences.push(new Fence());
   }
  for(let f of fences){
    f.move();
    f.show();
    if(cat.hits(f)){
      text("Score: " + round(score), 190, 110);
      noLoop();
    }
  }
}

function mousePressed(){
  if(y>= 172){
    cat.jump();
  }
}

function keyPressed() {
  if (keyCode === 32 && y == 172) {
    cat.jump();
  } else if (keyCode === 38 && y == 172) {
    cat.jump();
  }
}
