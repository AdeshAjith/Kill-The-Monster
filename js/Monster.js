class Monster{
    constructor(x,y,radius){
        var Monster_Options={
            density : 1,
            friction : 1,
            restitution : 0.8
        }
        this.radius = radius
        this.image = loadImage("images/Monster-01.png");
        this.body = Bodies.circle(x,y,radius,Monster_Options);
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        imageMode(CENTER);
        image(this.image,0,0,250,250);
        pop();
    }    
}