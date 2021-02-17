class Garbage{
    constructor(x,y,radius){
        var options ={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:0.5
        }
        this.body=Bodies.circle(x,y,radius,options);
        this.radius= radius;
        this.image = loadImage("paper.png"); 
        World.add(world, this.body);
    
    }
    display(){
        var angle=Matter.Body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(RADIUS);
        image(this.image, 0, 0,this.radius,this.radius);
        pop();
    }
}