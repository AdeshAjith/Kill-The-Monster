class Hero{
    constructor(x,y,radius){
        var Hero_Options={
            density : 1,
            friction : 1,
            restitution : 0.8
        }
        this.radius = radius
        this.image = loadImage("images/Superhero-01.png");
        this.body = Bodies.circle(x,y,radius,Hero_Options);
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        imageMode(CENTER);
        image(this.image,0,0,300,150);
        pop();
    }    
}