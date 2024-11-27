import React from 'react'
import Proyecto from './Proyecto'
import Aprendiendo from './Aprendiendo'

const Proyectos = () => {
  const pagina1 = [{href:'https://iacastro.netlify.app', imagen:'/portafolio.png', texto:'Portafolio'}]
  const pagina2 = [{href:'https://book.ellus.cl/winter2025/', imagen:'/Ellus.png', texto:'Catalogo Ellus'}]
  //const pagina3 = [{href:'https://book.ellus.cl/winter2025/', imagen:'/Ellus.png', texto:'Catalogo Mormaii'}]
  const pagina3 = [{href:'https://tamchile.cl/ilgioco/winter2025/', imagen:'/Ilgioco.png', texto:'Catalogo Ilgioco'}]

  const tecnologias1 = [
    '/react.png',
    '/tailwind.png',
    '/nodejss.png'
  ]
  
  const tecnologias2 = [
    '/wordpress3.png',
    '/css.png',
    '/sql.png',

  ]

  return (
    <section id='proyectos' className='seccionProyectos'>
      <div className='hidden md:block'>

        <div className='flex justify-center p-10'>
              <h4 className='tipeoled'>
                <span>M</span>
                <span>i</span>
                <span>s</span>
                <span>  </span>
                <span>p</span>
                <span>r</span>
                <span>o</span>
                <span>y</span>
                <span>e</span>
                <span>c</span>
                <span>t</span>
                <span>o</span>
                <span>s</span>
              </h4>
        </div>
        <div className='grid grid-rows-3 justify-items-center items-center grid-cols-4'>
          
          {/* Fila 1 */}
          <div className='row-start-1 col-start-1 '>
            <Proyecto proyecto = {pagina1}/>
          </div>
          <div className=' descripcion-proyecto row-start-1 col-start-2 col-end-4'>
            <p>Proyecto de portafolio el cual tiene como fin dar a conocer al creador, sus habilidades
              destacadas y actualmente aprendidas como también demostrar los proyectos personales a la fecha elavorados
              por este 
            </p>
          </div>
          <div className=' descripcion row-start-1 col-start-4'>
            <p className='descripcion'>Tecnologias usadas</p>
            <div className='contenedor-imagen my-4 just space-x-8'>
              <Aprendiendo habilidades = {tecnologias1}/>
            </div>
          </div>

          {/* Fila 2 */}
          <div className='row-start-2 col-start-1 '>
            <Proyecto proyecto = {pagina2}/>
          </div>
          <div className=' descripcion-proyecto row-start-2 col-start-2 col-end-4'>
            <p>
              Este proyecto esta realizado para previsualizar el catalogo de las temporadas acordada por el cliente Ellus.
              Trabaje con Css para asignar estilos personalizados segun la necesidad de la empresa y la diagramación fue propuesta propia.
              Se espera poder agregar funcionalidades pero este es la pagina piloto de momento.
            </p>
          </div>
          <div className=' descripcion row-start-2 col-start-4'>
            <p className='descripcion'>Tecnologias usadas</p>
            <div className='contenedor-imagen my-4 just space-x-8'>
              
              <Aprendiendo habilidades = {tecnologias2}/>
              
            </div>
          </div>

          {/* Fila 3 */}
          <div className='row-start-3 col-start-1 '>
            <Proyecto proyecto = {pagina3}/>
          </div>
          <div className=' descripcion-proyecto row-start-3 col-start-2 col-end-4'>
            <p>
              Similar al anterior proyecto. Catalogo para mostrar a los clientes de la marca Ilgioco.
              A diferencia del anterior, en este proyecto tuve que utilizar mas conocimientos de SQL para poder desarrollarlo.
            </p>
          </div>
          <div className=' descripcion row-start-3 col-start-4'>
            <p className='descripcion'>Tecnologias usadas</p>
            <div className='contenedor-imagen my-4 just space-x-8'>
              
              <Aprendiendo habilidades = {tecnologias2}/>
              
            </div>
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className='md:hidden'>

        <div className='flex justify-center p-10'>
              <h4 className='tipeoled'>
                <span>M</span>
                <span>i</span>
                <span>s</span>
                <span>  </span>
                <span>p</span>
                <span>r</span>
                <span>o</span>
                <span>y</span>
                <span>e</span>
                <span>c</span>
                <span>t</span>
                <span>o</span>
                <span>s</span>
              </h4>
        </div>

        <div className='grid grid-rows-3 grid-cols-1 justify-items-center'>
          
          <div className='row-start-1 col-start-1 '>
              <Proyecto proyecto = {pagina1}/>
          </div>
          <div className=' descripcion-proyecto'>
            <p>Proyecto de portafolio el cual tiene como fin dar a conocer al creador, sus habilidades
              destacadas y actualmente aprendidas como también demostrar los proyectos personales a la fecha elavorados
              por este. 
            </p>
          </div>
          <div className='p-5'>
            <p className='descripcion'>Tecnologias usadas</p>
            <div className='contenedor-imagen my-4 just space-x-8'>
              <Aprendiendo habilidades = {tecnologias1}/>
            </div>
          </div>

         
        </div>
      {/* 
      <div className='md:hidden'>

        <div className='flex justify-center p-10'>
              <h4 className='tipeoled'>
                <span>M</span>
                <span>i</span>
                <span>s</span>
                <span>  </span>
                <span>p</span>
                <span>r</span>
                <span>o</span>
                <span>y</span>
                <span>e</span>
                <span>c</span>
                <span>t</span>
                <span>o</span>
                <span>s</span>
              </h4>
        </div>
        <div className='grid grid-rows-2 justify-items-center items-center grid-cols-4'>
          
      
          <div className='row-start-1 col-start-1 '>
            <Proyecto proyecto = {pagina1}/>
          </div>
          <div className=' descripcion-proyecto row-start-1 col-start-2 col-end-4'>
            <p>Proyecto de portafolio el cual tiene como fin dar a conocer al creador, sus habilidades
              destacadas y actualmente aprendidas como también demostrar los proyectos personales a la fecha elavorados
              por este 
            </p>
          </div>
          <div className=' descripcion row-start-1 col-start-4'>
            <p className='descripcion'>Tecnologias usadas</p>
            <div className='contenedor-imagen my-4 just space-x-8'>
              <Aprendiendo habilidades = {tecnologias1}/>
            </div>
          </div>

        
          <div className='row-start-2 col-start-1 '>
            <Proyecto proyecto = {pagina2}/>
          </div>
          <div className=' descripcion-proyecto row-start-2 col-start-2 col-end-4'>
            <p>
              En desarrollo
            </p>
          </div>
          <div className=' descripcion row-start-2 col-start-4'>
            <p className='descripcion'>Tecnologias usadas</p>
            <div className='contenedor-imagen my-4 just space-x-8'>
              <p>
                En Desarrollo
              </p>
            </div>
          </div>
        </div>*/}
      </div>
    </section>
  )
}

export default Proyectos
