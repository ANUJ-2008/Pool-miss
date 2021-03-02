class Ball
{
    constructor(x,y,color,number)

    {
        var options=
        {
            frictionAir:0.2,
            restitution:1 
        }
        
        this.body=Matter.Bodies.circle(x,y,25,options)
        Matter.World.add(myWorld,this.body)
        this.width=25;
        this.color=color;
        this.number=number;

    
    }

    display()
    {
    var pos=this.body.position
    if(pos.x>=1000&&pos.x<1050&&pos.y>0&&pos.y<50||
        pos.x>=590&&pos.y<58&&pos.x<600&&pos.y>0||
        pos.x>=80&&pos.y<60&&pos.x<75&&pos.y>13||
        pos.x>=100&&pos.y<390&&pos.x<100&&pos.y<420||
        pos.x>=600&&pos.y<390&&pos.x<600&&pos.y<420||
        pos.x>=1115&&pos.y<385&&pos.x<1115&&pos.y<425)
    {
        Matter.World.remove(myWorld,this.body)
    }
    ellipseMode(RADIUS)
    stroke("pink")
    strokeWeight(3)
    fill(this.color)
    push()
    translate(this.body.position.x,this.body.position.y)
    rotate(this.body.angle)
    circle(0,0,this.width)
    fill("white")
    circle(0,0,this.width-10)
    fill("black")
    textAlign(CENTER)
    text(this.number,0,5)
    pop()    
}
}