class Ground{
    constructor(x,y,width,height){
        var Ground_Options={
            isStatic:true
        }
        this.width = width
        this.height = height
        this.body = Bodies.rectangle(x,y,width,height,Ground_Options)
        World.add(world,this.body)
    }
    display(){
        var pos = this.body.position
        push()
        translate(pos.x,pos.y)
        rectMode(CENTER)
        rect(0,0,this.width,this.height)
        stroke("white")
        fill("white")
        pop()
    }
}