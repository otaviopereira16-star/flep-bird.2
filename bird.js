class Bird{
  constructor(x,y,img){
    this.x = x;
    this.y = y;
    this.gravidade = 0.9;
    this.vel = 0.9;
    this.lift = -15;
    this.img = img;
  }
  exibi(){
    image(this.img,this.x, this.y, 60,50);
    
  }
  
  update(){
    this.vel += this.gravidade;
    this.vel *= 0.7;
    this.y += this.vel;
    
  }
  up(){
    this.vel += this.lift;
    console.log(this.vel);
  }
}
  