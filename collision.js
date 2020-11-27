AFRAME.registerComponent("collision-detector",{    
    
    tick: function () {

        var collidingEntityEl =document.querySelector("#plane_model")
        var gameMapEl=document.querySelector("#game")
        var anotherEntityEl =document.querySelector("#ring1")
        var anotherEntityEl2 =document.querySelector("#ring6")
        var anotherEntityEl3 =document.querySelector("#ring11")

        var pos1 = collidingEntityEl.getAttribute('position');
        var ringPos1 = gameMapEl.getAttribute('position');
        var ringPos2 = anotherEntityEl2.getAttribute('position');
        var ringPos3 = anotherEntityEl3.getAttribute('position');
        
        //var colliderShape=collidingEntityEl.getAttribute('static-body');

        console.log(collidingEntityEl)   
        console.log(anotherEntityEl)

        var x1, y1,z1, x2, y2,z2, x3, y3, z3, x4, y4, z4
        var pos1,ringPos1, ringPos2,ringPos3,distance, distance1, distance2, radius
          
        x1=pos1.x
        y1=pos1.y
        z1=pos1.z
            
        x2=ringPos1.x
        y2=ringPos1.y
        z2=ringPos1.z
    
        x3=ringPos2.x
        y3=ringPos2.y
        z3=ringPos2.z
    
        x4=ringPos3.x
        y4=ringPos3.y
        z4=ringPos3.z
    
        console.log("pos1",pos1);
        console.log("ringPos1",ringPos1);
        console.log("ringPos2",ringPos2);
        console.log("ringPos3",ringPos3);

        console.log("now...");
       

        distance=Math.sqrt(Math.pow(Math.abs(x1-x2),2)+Math.pow(Math.abs(y1-y2),2)+Math.pow(Math.abs(z1-z2),2))
        distance1=Math.sqrt(Math.pow(Math.abs(x1-x3),2)+Math.pow(Math.abs(y1-y3),2)+Math.pow(Math.abs(z1-z3),2))
        distance2=Math.sqrt(Math.pow(Math.abs(x1-x4),2)+Math.pow(Math.abs(y1-y4),2)+Math.pow(Math.abs(z1-z4),2))

        console.log("distance",distance);
        console.log("distance1",distance1);
        console.log("distance2",distance2);

        // radius=colliderShape.sphereRadius

        if(distance>25 && distance<28){
            console.log("detected")
            anotherEntityEl.setAttribute('color','green')
        }  
        if(distance1>25 && distance1<28){
            console.log("detected")
            anotherEntityEl2.setAttribute('color','green')
        }
        if(distance2>25 && distance2<28){
            console.log("detected")
            anotherEntityEl3.setAttribute('color','green')
        } 
    }
});

