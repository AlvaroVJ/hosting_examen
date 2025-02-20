window.addEventListener('load', initScene)

const paperbag = [
    {x: 0, y: 0, z: -30},
    {x: 0, y: 0, z: 30},
    {x: 30, y: 0, z: 0},
    {x: -30, y: 0, z: 0},
    {x: 20, y: 0, z: 20},
    {x: 20, y: 0, z: -20},
    {x: -20, y: 0, z: -20},
    {x: -20, y: 0, z: 20}
]

let score = 0
function initScene(){
    let orbits = document.querySelectorAll('.orbit')

    orbits.forEach(orbit =>{
        paperbag.forEach(pos =>{
            let paperbag = document.createElement('a-entity')
            paperbag.setAttribute('gltf-model', '#paperbag')
            paperbag.setAttribute('class', 'paperbag')
            paperbag.setAttribute('scale', '7 7 7')
            paperbag.object3D.position.set(pos.x, pos.y, pos.z)
            paperbag.setAttribute('shootable','')
            orbit.appendChild(paperbag)
            
        })
    }
    )
}

AFRAME.registerComponent('shootable', {
    init: function (){
        this.el.addEventListener('click', () => {
            this.el.parentNode.removeChild(this.el)
            document.querySelector('[text]').setAttribute('value', `${++score} Bolsas recogidas`)

            if (score === 32)
            {
                alert('Gracias, recogistes todas las bolsas, eres un ciudadano ejemplar!')
            }
        })
    }
})