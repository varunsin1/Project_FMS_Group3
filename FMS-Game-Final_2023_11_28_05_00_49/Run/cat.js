
class Cat{

  jump(){
    vy = -jump;
  }
  
  move(){
    y += vy;
    if(y < 476){
      vy += g;
    }
    else{
      vy = 0;
      y = 476;
    }
  }
  
  hits(fence){
    return collideCircleCircle(x+10, y-5, 65,fence.x + 35,fence.y+40,30);
  }
  
  show(){
    // pet.resize(156,0);
    image(pet, x, y, 52, pet.height,52*floor(frame), 0, 52,pet.height);
    // pet.resize(156,0);
    frame += 0.17;
    if (frame > 3) {
      frame = 0;
    }
  }
  
}