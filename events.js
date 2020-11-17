
var sceneEl = document.querySelector('#scene');
//var camera = sceneEl.querySelector('#look')
var map = sceneEl.querySelector('#terrainMap') //.components.map.map;


map.addEventListener('keydown',function(e) {
    console.log(e.keyCode)
    switch (e.keyCode) {
        case 37:
            //alert('left');
            map.object3D.position.x += 5;
            map.object3D.position.multiplyScalar(5);
            console.log('Left key down')
            break;
        case 38:
            //alert('up');
            map.object3D.rotation.y = THREE.Math.degToRad(45);
            map.object3D.rotation.divideScalar(2);
            break;
        case 39:
            //alert('right');
            map.object3D.position.x -= 5;
            map.object3D.position.multiplyScalar(5);
            break;
        case 40:
            //alert('down');
            map.object3D.rotation.y = THREE.Math.degToRad(-45);
            map.object3D.rotation.divideScalar(2);
            break;
    }
});

