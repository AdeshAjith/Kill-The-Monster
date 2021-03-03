class Fly{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.03,
            length: 300
        }
  
        this.pointB = pointB
        this.body = Constraint.create(options);
  
        World.add(world,this.body)
    }

    display(){
        if(this.body.bodyA){
            var pointA = this.body.bodyA.position;
            var pointB = this.pointB;
            push()
            strokeWeight(0)
            line(pointA.x, pointA.y, pointB.x, pointB.y);
            pop()
        }  
    } 
      
}