AFRAME.registerComponent("rotation-reader",{
    schema: {
        speedOfRoation: { type: 'number',default: 0 },
        speedOfAscent: { type: 'number',default: 0 }
    },
    init: function() {

        window.addEventListener("keydown",(e) => {
            var mapRotation1 = this.el.getAttribute('rotation')          

            if (e.key === "ArrowRight") {
                if (this.data.speedOfRoation < 0.1) {
                    this.data.speedOfRoation += 0.01
                }
            }
            if (e.key === "ArrowLeft") {
                if (this.data.speedOfRoation > -0.1) {
                    this.data.speedOfRoation -= 0.01
                }

            }
            if (e.key === "ArrowUp") {
                if (mapRotation1.x > -20) {
                    mapRotation1.x -= 0.01
                }
            }
            if (e.key === "ArrowDown") {
                if (mapRotation1.x < 20) {
                    mapRotation1.x += 0.01
                }

            }
            this.el.setAttribute('rotation',{ x: mapRotation1.x,y: mapRotation1.y,z: mapRotation1.z })
        })

    },
    tick: function() {

        var mapRotation = this.el.getAttribute('rotation')
        mapRotation.y += this.data.speedOfRoation
        this.el.setAttribute('rotation',{ x: mapRotation.x,y: mapRotation.y,z: mapRotation.z })
    }
});
AFRAME.registerComponent("plane-rotation-reader",{
   
    init: function() {

        window.addEventListener("keydown",(e) => {
            var planeRotation = this.el.getAttribute('rotation')
            var planePosition = this.el.getAttribute('position')

            if (e.key === "ArrowRight") {
                if (planeRotation.x < 10) {
                    planeRotation.x += 0.5
                    this.el.setAttribute('rotation',planeRotation)
                }
            }
            if (e.key === "ArrowLeft") {
                if (planeRotation.x > -10) {
                    planeRotation.x -= 0.5
                    this.el.setAttribute('rotation',planeRotation)
                }

            }
            if (e.key === "ArrowUp") {
                if (planeRotation.z < 20) {
                    planeRotation.z += 0.5
                    this.el.setAttribute('rotation',planeRotation)
                }
                if (planePosition.y <7) {
                    planePosition.y += 0.01
                    this.el.setAttribute('position',planePosition)
                }
            }
            if (e.key === "ArrowDown") {
                if (planeRotation.z > -(20)) {
                    planeRotation.z -= 0.5
                    this.el.setAttribute('rotation',planeRotation)
                }
                if (planePosition.y >-2) {
                    planePosition.y -= 0.01
                    this.el.setAttribute('position',planePosition)
                }

            }

        })

    }
});
