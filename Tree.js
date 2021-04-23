class Tree{
    constructor(x,y){
        this.x=x;
        this.y=y;
        this.treeWidth=500;
        this.treeHeight=600;
        
        this.image = loadImage("tree.png");
        this.body = Bodies.rectangle(this.x,this.y,this.treeWidth,this.treeHeight, {isStatic:true});
        World.add(world, this.body)
    }
    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        fill(255);
        imageMode(CENTER);
        image(this.image,0,-this.treeHeight/2,this.treeWidth,this.treeHeight);
        pop();
    }
}