class Ball
{
  constructor()
  {
    this.x = width/2;
    this.y = height/2;
    this.w = 20;
    this.vx = 10;
    this.vy = 10;
  }
  
  move()
  {
    this.y += this.vy;
    this.x += this.vx;
    
  } 
  
  update()
  {
    if(this.y>=height || this.y<=0)
    {
      this.vy *= -1;
    }
  }
  reset()
  {
    this.x = width / 2;
    this.y = height / 2;
  }
  show()
  {
    fill(128,128,128);
    noStroke();
    ellipse(this.x,this.y,this.w);
  }
}