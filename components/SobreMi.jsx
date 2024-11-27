import React from 'react'
import Image from 'next/image'
import Habilidades from './Habilidades'
import Aprendiendo from './Aprendiendo'

const SobreMi = () => {
  const aprendiendo = [
    '/image.png',
    '/wordpress3.png'
  ]

  return (
    <section className="seccionSobreMi container-xl">
      <div className='flex items-center'>
      <div className='hidden md:block'>
        <div className=' grid grid-rows-3 justify-items-center items-center grid-cols-3 grid-flow-col'>
          <div className='col-span-3 marcoled items-center'>
            <h4 className='letrorled letrero'>Sobre mi</h4>
          </div>
            <div className='h-full w-full row-start-2 col-start-1'>
              <h4 className=' text-glow habilidades-texto break-inside-avoid-column'>Habilidades</h4>
              <br/>
              <div className='contenedor-imagen'>
                <Habilidades />
              </div>
            </div>
            <div  className='h-full w-full row-start-2 col-start-3'>
              <h4 className='habilidades-texto break-inside-avoid-column'>Aprendiendo</h4>
              <br/>
              <div className='contenedor-imagen'>
                <Aprendiendo habilidades = {aprendiendo} />
              </div>
            </div>
            <div className='row-start-2 col-start-2'>
            <Image
            src="/sobremi2.jpg"
            width={220}
            height={250}
            alt='Imagen'
            className='rounded-full '/>
          </div>

          <div  className='mt-8 row-start-3 col-start-1 col-end-4'>
            <h4 className='hidden md:block descripcion break-inside-avoid-column '>
            Soy un desarrollador autodidacta, apasionado y entusiasta, con el objetivo de convertirme en un sólido desarrollador Full-stack y empezar mis propios proyectos. Valoro las buenas prácticas laborales, la comunicación efectiva en equipo y la colaboración. Siempre dispuesto a ayudar cuando tengo el conocimiento y el tiempo necesarios, y espero el mismo apoyo de mis compañeros.
            </h4>
          </div>
        </div>

        </div>

        {/* Mobile */}
        <div className='md:hidden'>
          <div className='flex-none marcoled items-center'>
            <h4 className='letrorled letrero'>Sobre mi</h4>
          </div>

          <div className='flex items-center space-x-24 justify-center'>
            <Image
              src="/sobremi2.jpg"
              width={220}
              height={250}
              alt='Imagen'
              className='rounded-full'/>
          </div>
          <div className="grid grid-cols-1 items-center justify-center mt-5 ">
            <div className="grid grid-cols-1 space-y-6 items-center justify-center mt-5">
              <h4 className='text-glow habilidades-texto break-inside-avoid-column'>Habilidades</h4>
              <div >
                <Habilidades />
              </div>
              <h4 className='habilidades-texto break-inside-avoid-column'>Aprendiendo</h4>
              <div className='contenedor-imagen'>
                <Aprendiendo habilidades={aprendiendo} />
              </div>
              <h6 className='presentacion max-w-screen-md'>
                Soy un desarrollador autodidacta, apasionado y entusiasta, con el objetivo de convertirme en un sólido desarrollador Full-stack y empezar mis propios proyectos. Valoro las buenas prácticas laborales, la comunicación efectiva en equipo y la colaboración. Siempre dispuesto a ayudar cuando tengo el conocimiento y el tiempo necesarios, y espero el mismo apoyo de mis compañeros.
              </h6>
            </div>
          </div>
          {/* <div className='flex items-center space-x-24 justify-center '>
            <Image
            src="/sobremi2.jpg"
            width={220}
            height={250}
            alt='Imagen'
            className='rounded-full'/>
            <div className='my-16'>
              <div className='my-8'>
                <h4 className='text-glow habilidades-texto break-inside-avoid-column'>Habilidades</h4>
                <br/>
                <div className='contenedor-imagen'>
                  <Habilidades />
                </div>
              </div>
              <div className='my-8'>
                <h4 className='habilidades-texto break-inside-avoid-column'>Aprendiendo</h4>
                <br/>
                <div className='contenedor-imagen'>
                  <Aprendiendo habilidades = {aprendiendo} />
                </div>
              </div>
            </div>
          </div> */}
        
        </div>
      </div>
    </section>
  )
}

export default SobreMi
