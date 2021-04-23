class Mango{
    constructor(x,y,r){

     var options={
            isStatic:true,
            restituition:0.08,
            friction:1
        }
        this.x=x;
        this.y=y;
        this.r=r;
        this.mangoWidth=50;
        this.mangoHeight=50;

        this.image = loadImage('mango.png');
        this.body = Bodies.rectangle(this.x,this.y,this.r,this.mangoWidth,this.mangoHeight,options)
        World.add(world, this.body)
    }
    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        imageMode(CENTER);
        image(this.image,this.r,-this.mangoHeight/2,this.mangoWidth,this.mangoHeight);
        pop();
    }
}