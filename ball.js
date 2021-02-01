class ball {

    constructor(x,y,width,height){ 
  
     var opt = {
         restitution : 0.3,
         isStatic : false,
         friction:0.5,
         density:1.2
     }
  
    this.body = Bodies.rectangle(x,y, width,height,opt);
    this.width = width;
    this.height = height; 

    this.image = loadImage("paper.png");
    
    World.add(world,this.body);
  
    }
  
    display(){
    
    var pos = this.body.position;
  
    imageMode(CENTER);
    image(this.image, pos.x,pos.y, this.width, this.height);
    fill(255);
    
  
    }
  
  }