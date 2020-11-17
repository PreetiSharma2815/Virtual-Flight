var mapEl;
AFRAME.registerComponent('rotation-reader',{
    
    init: function () {
        //Handling Key pressed Events.
        // var sceneEl = document.querySelector('a-scene'); 
        // mapEl = sceneEl.querySelector('#terrainMap')
        
        this.el.addEventListener('keydown',function(e) {
            
            console.log(e.code)
            
            switch (e.code) {
                case 37:
                    //alert('left');
                    //37
                    this.el.object3D.position.x += 5;
                    this.el.object3D.position.multiplyScalar(5);
                    console.log('Left key down')
                    break;
                case 38:
                    //alert('up');
                    //38
                    this.el.object3D.rotation.y = THREE.Math.degToRad(45);
                    this.el.object3D.rotation.divideScalar(2);
                    break;
                case 39:
                    //alert('right');
                    //39
                    this.el.object3D.position.x -= 5;
                    this.el.object3D.position.multiplyScalar(5);
                    break;
                case 40:
                    //alert('down');
                    //40
                    this.el.object3D.rotation.y = THREE.Math.degToRad(-45);
                    this.el.object3D.rotation.divideScalar(2);
                    break;
            }
        });
        

      },
    tick: function() {
        // `this.el` is the element.
        // `object3D` is the three.js object.

        // `rotation` is a three.js Euler using radians. `quaternion` also available.
        //console.log(this.el.object3D.rotation);

        // `position` is a three.js Vector3.
        //console.log(this.el.object3D.position);
        
        // console.log(this.el);
        
    }
    
});

