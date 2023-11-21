
class Cat{

  jump(){
    vy = -jump;
  }
  
  move(){
    y += vy;
    if(y < 161){
      vy += g;
    }
    else{
      vy = 0;
      y = 161;
    }
  }
  
  hits(fence){
    return collideCircleCircle(x+30, y-5, 65,fence.x + 35,fence.y+40,30);
  }
  
  show(){
    image(pet, x, y, 52, pet.height,52*floor(frame), 0, 52,pet.height);
    frame += 0.17;
    if (frame > 3) {
      frame = 0;
    }
  }
  
}