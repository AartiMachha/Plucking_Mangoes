class Stone{
    constructor(x ,y ,r){
        var options={
            isStatic:false,
            restitiution:0,
            friction:1,
            density:1.2
        }
        this.r=r;
        this.x=x;
        this.y=y;
        this.image = loadImage('stone.png');
        this.body = Bodies.circle(this.x, this.y, (this.r-20)/2, options)
        
        World.add(world, this.body)
    }
    display(){
        var pos= this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(this.body.angle);
        fill(255,0,255);
        imageMode(CENTER);
        ellipseMode(CENTER);
        image(this.image,0,0,this.r*2,this.r*2);
        pop();
    }
}