import React from 'react'
import Habilidad from './Habilidad'


const Habilidades = () => {
    const imagenes = [
        '/css.png',
        '/bootstrap.png',
        '/html.png',
        '/javascript.png',
        '/django.png',
        '/postgres.png',
        '/react.png',
        '/tailwind.png',
        '/nodejss.png',
        '/Apex.jpg'
    ]
  return (
    <Habilidad habilidades = {imagenes}/>
  )
}

export default Habilidades
