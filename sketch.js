var striker,showArrow,aimAngle,aimPower,score;

const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;


function preload()
{
    table=loadImage("Pool Table.jpg")
    arrow=loadImage("Arrow.png")
}

function setup()
{
    createCanvas(1200,450)
    myEngine=Engine.create()
    myWorld=myEngine.world
    myEngine.world.gravity.y=0;

    aimAngle=0;
    aimPower=10;
    score=0;

    striker=new Striker(300,210)

    ball1=new Ball(942,135,"purple",1)
    ball2=new Ball(942,185,"green",2)
    ball3=new Ball(942,235,"yellow",3)
    ball4=new Ball(942,285,"red",4)
    ball5=new Ball(898,160,"cyan",5)
    ball6=new Ball(898,210,"darkblue",6)
    ball7=new Ball(898,260,"black",7)
    ball8=new Ball(854,180,"darkgreen",8)
    ball9=new Ball(854,235,"indigo",9)
    ball10=new Ball(810,210,"lightpink",10)

    wall1=new Wall(62,220,10,350)
    wall2=new Wall(327,391,420,10)
    wall3=new Wall(327,45,420,10)
    wall4=new Wall(850,392,420,10)
    wall5=new Wall(865,50,420,10)
    wall6=new Wall(1110,230,10,320)
}

function  draw()
{
    background(table)

    Engine.update(myEngine)

    if(keyDown("UP_ARROW")&&aimPower<70)
    {
        aimPower++;
        showArrow=true;
    }

    if(keyIsDown(DOWN_ARROW)&&aimPower<10)
    {
        aimPower--;
        showArrow=true;
    }

    if(showArrow===true)
    {
        imageMode(CENTER)
        push()
        translate(striker.body.position.x+((aimPower-10)*-1)+aimPower+20,striker.body.position.y)
        rotate(aimAngle/200)
        image(arrow,0,0,aimPower,50)
        pop()
    }

    

    if(aimAngle>1200)
    {
        aimAngle=0;
    }

    if(aimAngle<0)
    {
        aimAngle=1200;
    }

    if(keyIsDown(LEFT_ARROW)&&showArrow===true)
    {
        aimAngle-=7;
    }

    if(keyIsDown(RIGHT_ARROW)&&showArrow===true)
    {
        aimAngle+=7;
    }

    if(keyIsDown(32)&&showArrow===true)
    {
        if(aimAngle<157)
        {
            Matter.Body.setVelocity(striker.body,
                {
                    x:aimPower,
                    y:aimAngle
                })

        }

        else if(aimAngle<315)
        {
            
        Matter.Body.setVelocity(striker.body,
                    {
                    x:aimPower,
                    y:aimAngle
                    })
            
        }

        else if(aimAngle<470)
        {
            Matter.Body.setVelocity(striker.body,
                {
                    x:aimPower*(-1),
                    y:aimAngle
                })
        }

        else if(aimAngle<630)
        {
            Matter.Body.setVelocity(striker.body,
                {
                    x:aimPower*(-1),
                    y:aimAngle
                })
        }

        else if(aimAngle<950)
        {
            Matter.Body.setVelocity(striker.body,
                {
                    x:aimPower,
                    y:aimAngle*(-1)
                })
        }

        else if(aimAngle<1100)
        {
            Matter.Body.setVelocity(striker.body,
                {
                    x:aimPower,
                    y:aimAngle*(-1)
                })
        }
    



        aimPower=0
        showArrow=false;

    }

    striker.display()
    ball1.display()
    ball2.display()
    ball3.display()
    ball4.display()
    ball5.display()
    ball6.display()
    ball7.display()
    ball8.display()
    ball9.display()
    ball10.display()
    wall1.display()
    wall2.display()
    wall3.display()
    wall4.display()
    wall5.display()
    wall6.display()

    fill("black")
    noStroke()
    text(mouseX,100,100)
    text(mouseY,120,120)
}