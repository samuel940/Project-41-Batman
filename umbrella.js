class Umbrella {
    constructor(x, y,r) {

        var options ={
            //restitution:0.4
            isStatic:true
        }
        this.r=r;
        this.image = loadImage("images/Walking Frame/walking_1.png")
        this.body = Bodies.circle(x, y, this.r,options);       
        
        World.add(world, this.body);

    }
    display() {

        

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        //imageMode(CENTER);
        noStroke();
        imageMode(CENTER);
        image(this.image, 0, 0, this.r,this.r);
        //fill(this.color)
       // ellipseMode(RADIUS);
        //ellipse(0, 0, this.r,this.r);
        pop();
    }

};
