'use client'
import React from 'react'
import Redes from './Redes'
import { useEffect, useState } from 'react'

const Contacto = () => {
  
  const redes = [{href:'wa.link/s8haiu',imagen:'/wsp.png'},
                 {href:'https://www.linkedin.com/in/israelcastror/', imagen:'/linkedin.png'}]

  const [pixeles, setPixeles] = useState([]);



  useEffect(() => {

    const pixelesIniciales = Array.from({length:50}, () => ({
      left: Math.random() * 100 + '%',
      duration: Math.random() * 5 + 3,
      width: '5px',
      height: '5px',
      position: 'absolute',
      animationDelay: 0.1
    }))

    setPixeles(pixelesIniciales)
    // const interval = setInterval(() => {
    //   const duracion = Math.random() * 5+3
    //   setPixeles((prevPixels) => {
    //     if (prevPixels.length >= 30) {
    //       // Si hay 10 o más píxeles, eliminamos el primer pixel antes de agregar uno nuevo
    //       prevPixels.shift();
    //     }
    //     return [...prevPixels, { 
    //       left: Math.random() * 100 + '%',
    //       duracion,
    //       width: '5px',
    //       height: '5px',
    //       backgroundColor: 'aqua',
    //       position: 'absolute',
    //       animation: 'pixels 3s linear infinite',
    //       }];
    //   });
    // }, 5000);

    return () => {

    };
  }, []);
  
  return (
    <section id='contacto' className='seccionContacto'>
      <div id='fondo' className="fondo">
        {pixeles.map((pixel,index) => (
          <span key={index} 
          style={{left:pixel.left ,
                  width:pixel.width,
                  height:pixel.height,
                  backgroundColor:pixel.backgroundColor,
                  position:pixel.position,
                  animation:pixel.animation,
                  animationDuration: `${pixel.duracion}s`,
                  animationDelay: `${index * pixel.animationDelay}s`, // Añadir un retraso escalonado basado en el índice del píxel
          }}
          className="pixel"></span>
        ))}
      </div>
        <div id='content' className='grid grid-rows-2 justify-items-center items-center grid-cols-3 grid-flow-col'>
            <div className=' row-start-1 col-start-1 col-end-5'>
                <h3 className='contacto'>Contacto</h3>
                <br/>
                <h3 className='contacto-titulos'>Email /<span> israel.castro.rebolledo@gmail.com</span></h3>
                <h3 className='contacto-titulos'>Telefono /<span> +569 97151153</span></h3>
            </div>
            <div className=' row-start-2 col-start-1 col-end-5 '>
              <h3 className='contacto-titulos'>Redes Sociales</h3> 
              <div>
                <Redes rrss = {redes}/>
              </div>
            </div>
        </div>

    </section>
  )
}

export default Contacto
