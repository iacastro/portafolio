import React from 'react'
import Image from 'next/image'
import Habilidades from './Habilidades'
import Aprendiendo from './Aprendiendo'

const SobreMi = () => {
  const aprendiendo = [
    '/postgres.png',
    '/react.png',
    '/tailwind.png',
    '/nodejss.png'
  ]

  return (
    <section className="seccionSobreMi container-xl">
      <div className='flex items-center'>
      <div className='hidden md:block'>
        <div className='grid grid-rows-3 justify-items-center items-center grid-cols-3 grid-flow-col'>
          <div className='col-span-3 marcoled items-center'>
            <h4 className='letrorled letrero'>Sobre mi</h4>
          </div>
            <div className='row-start-2 col-start-1'>
              <h4 className=' text-glow habilidades-texto break-inside-avoid-column'>Habilidades</h4>
              <br/>
              <div className='contenedor-imagen'>
                <Habilidades />
              </div>
            </div>
            <div  className='row-start-2 col-start-3'>
              <h4 className='habilidades-texto break-inside-avoid-column'>Aprendiendo</h4>
              <br/>
              <div className='contenedor-imagen'>
                <Aprendiendo habilidades = {aprendiendo} />
              </div>
            </div>
            <div className='row-start-2 col-start-2'>
            <Image
            src="/7059588.jpg"
            width={220}
            height={250}
            alt='Imagen'
            className='rounded-full '/>
          </div>

          <div  className='row-start-3 col-start-1 col-end-4'>
            <h4 className='hidden md:block descripcion break-inside-avoid-column '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis ac dui sed iaculis. 
                Nulla fermentum felis et velit tincidunt dignissim. Nunc auctor nibh vitae urna feugiat, a molestie dolor eleifend. 
            </h4>
          </div>
        </div>

        </div>

        {/* Mobile */}
        <div className='md:hidden'>
          <div className='flex-none marcoled items-center'>
            <h4 className='letrorled letrero'>Sobre mi</h4>
          </div>
          <div className='flex items-center space-x-24 justify-center '>
            <Image
            src="/7059588.jpg"
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
          </div>
        
              <h4 className='titulo break-inside-avoid-column '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis ac dui sed iaculis. 
                  Nulla fermentum felis et velit tincidunt dignissim. Nunc auctor nibh vitae urna feugiat, a molestie dolor eleifend. 
              </h4>

        </div>
      </div>
    </section>
  )
}

export default SobreMi
