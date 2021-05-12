class Bin { 
    constructor(x,y){

        var options = {
        isStatic : true
    }
    this.x = x;
    this.y = y;
    this.width = 200;
    this.height = 213;
    this.thickness = 30;
    this.angle;
    this.image = loadImage("bin.png")
    this.bottomBody = Bodies.rectangle(this.x,this.y,this.width,this.thickness,options);
    this.leftBody = Bodies.rectangle(this.x - this.width/2,this.y - this.height/2,this.thickness,this.height,options);
    this.rightBody = Bodies.rectangle(this.x + this.width/2,this.y - this.height/2,this.thickness,this.height,options);

    World.add(world,this.bottomBody,this.leftBody, this.rightBody);
    }

    display(){
    var posBottom = this.bottomBody.position; 
    var posLeft = this.leftBody.position;
    var posRight = this.rightBody.position;
    //var angle = this.body.angle;
    push();
    translate(posLeft.x, posLeft.y);
    rectMode(CENTER);
    angleMode(RADIANS)
    fill("#0A1172");
    rotate(this.angle);
    // rect(pos.x,pos.y,this.width,this.height)
    pop();

    push();
    translate(posRight.x, posRight.y);
    rectMode(CENTER);
    angleMode(RADIANS)
    fill("#0A1172");
    rotate(-1*this.angle);
    // rect(pos.x,pos.y,this.width,this.height)
    pop();

    push();
    translate(posBottom.x, posBottom.y+10);
    rectMode(CENTER);
    angleMode(RADIANS)
    fill("#0A1172");
    imageMode(CENTER); 
    image(this.image, 0,-this.height/2,this.width, this.height)
    //rotate(-1*this.angle);
    // rect(pos.x,pos.y,this.width,this.height)
    pop();
    }

}
