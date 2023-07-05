'use client'

import React from 'react'
import Image from 'next/image'
import { useEffect } from 'react'

const Perfil = () => {
  
  const scrollProyectos = () => {
    const seccionproyectos = document.getElementById('proyectos');
    if(seccionproyectos) {
      seccionproyectos.scrollIntoView({behavior:'smooth'})
    }
  }

  const scrollContacto = () => {
    const seccionContacto = document.getElementById('contacto');
    if (seccionContacto){
      seccionContacto.scrollIntoView({behavior:'smooth'})
    }
  }

  useEffect(() => {
    const proyectosButton = document.getElementById('proyectos-boton');
    if (proyectosButton) {
      proyectosButton.addEventListener('click', scrollProyectos);
    }

    const contactoBoton = document.getElementById('hablemos')
    if (contactoBoton){
      contactoBoton.addEventListener('click',scrollContacto)
    }

    return () => {
      if (proyectosButton) {
        proyectosButton.removeEventListener('click', scrollProyectos);
      }

      if (contactoBoton) {
        contactoBoton.removeEventListener('click', scrollProyectos);
      }
    };
  }, []);

  return (
    <section className="contTitulo seccion-1">
      <div className='grid grid-rows-3 grid-flow-col '>
        <div className='flex justify-center items-end '>
          <Image
          src="/inicio2.jpg"
          width={128}
          height={128}
          alt='imagen'
          className='rounded-full'
          />
        </div>
        <div className='flex justify-center items-center'>
          <div className="titulo hidden sm:block">
            <h1 className="escritura-h1 ">Hola, soy <span>Israel Castro</span></h1>
            <h3 className="wrapper hidden ">
              Desarrollador
              <ul className="dinamic-text">
                <li><span>Backend</span></li>
                <li><span>Frontend</span></li>
                <li><span>Fullstack</span></li>
              </ul>
            </h3>
          </div>
            {/* Mobile */}
          <div className='titulo sm:hidden'>

            <h1 className="escritura-h1 sm:hidden">Hola, soy <span>Israel Castro</span></h1>
            <h3 className="wrapper sm:hidden">
              Desarrollador
              <ul className="dinamic-text">
                <li><span>Backend</span></li>
                <li><span>Frontend</span></li>
                <li><span>Fullstack</span></li>
              </ul>
            </h3>
          </div>
        </div>
        <div className='flex justify-center'>
          {/* Estos estilos solo se aplicarán en pantallas grandes */}
          <div className='flex space-x-20'>
            <button id="hablemos" className="btn hidden sm:block">Hablemos!</button>
            <button id="proyectos-boton" className="btn hidden sm:block">Mis Proyectos</button>
          </div>
      
          {/* Estos estilos solo se aplicarán en pantallas pequeñas */}
          <div className= "flex flex-col justify-items-center space-y-4 sm:hidden">
            <button id="hablemos" className="btn">Hablemos!</button>
            <button id="proyectos-boton" className="btn">Mis Proyectos</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Perfil
