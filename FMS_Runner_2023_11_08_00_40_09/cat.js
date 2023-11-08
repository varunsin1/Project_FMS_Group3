
class Cat{

  jump(){
    vy = -15;
  }
  
  move(){
    y += vy;
    if(y < 172){ //mid jump
      vy += g;
    }
    else{
      vy = 0;
      y = 172;
    }
  }
  
  hits(fence){
    return collideCircleCircle(x+25, y-5, 55,fence.x + 35,fence.y+40,30);
  }
  
  show(){
    //circle(x+25, y-5, 35);
    image(cImg, x, y, cImg.width, cImg.height);
  }
  
}