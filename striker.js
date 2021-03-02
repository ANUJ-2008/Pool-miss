class Striker
{
    constructor(x,y)
    {
        var options=
        {
            frictionAir:0.15,
            mass:7,
            restitution:1,
            isStatic:false
        }
        this.body=Matter.Bodies.circle(x,y,20,options)
        this.radius=20;
        World.add(myWorld,this.body)
        
    }

    display()
    {
        fill("white")
        ellipseMode(RADIUS)
        strokeWeight(5)
        stroke("Red")
        ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius)
    }
}