class Slingshot{
    constructor(body1,point2) {
    var options = {
    bodyA:body1 , pointB:point2,length:10,stiffness:0.04
    
    
    }
    this.sling= Constraint.create(options);
    this.pointB = point2;
    this.bodyA = body1;
    World.add(world,this.sling);
    
    }
    fly(){
    this.sling.bodyA = null

    }
    
    display () {
        if(this.sling.bodyA){
        strokeWeight(5);
    line(this.sling.bodyA.position.x,this.sling.bodyA.position.y,this.sling.pointB.x,this.sling.pointB.y);

        } 
    }
    
    }