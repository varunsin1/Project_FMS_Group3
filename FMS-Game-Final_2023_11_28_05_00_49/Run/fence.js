class Fence {
  
  constructor() {
    this.r = 94;
    this.x = width;
    this.y = 452;
  }
  move(){
    this.x -= 12;
  }
  
  show(){
    image(fence1,this.x,this.y);
    fence1.resize(this.r,0)
  }
  
}