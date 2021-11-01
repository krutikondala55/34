class Bob {

    constructor(x,y,r){

        var options = {
            isStatic:false,
            restitution:1,
            friction:0,
            slop: 1,
            density:3
        }

        this.r = r;
        this.body = Bodies.circle(x,y,r,options);
        this.color = color(random(100,255),random(100,255),random(100,255));
        World.add(world,this.body);

    }

    display(){

        var pos = this.body.position;

        push();
        ellipseMode(RADIUS);
        fill (this.color);
        noStroke();
        ellipse(pos.x,pos.y,this.r,this.r);
        pop();

    }

}