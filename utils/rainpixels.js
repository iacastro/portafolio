const fondo = document.getElementById('fondo')

function crearPixel(){
    var nuevoPixel = document.createElement("span")

    nuevoPixel.classList.add('pixel')
    fondo.appendChild(nuevoPixel)
    setTimeout(function(){
        fondo.removeChild(nuevoPixel)
    },2000)
}

setInterval(crearPixel,3000)