import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Proyecto = (props) => {
  const {proyecto} = props
  return (
    <div>
      {proyecto.map(({href,imagen,texto},index)=>(
        
        <div >
          {/* <div className='flecha-container'>
            <span class="text"></span>
            <span class="flecha"></span>  
          </div> */}
          <Link
            key={index}
            href={href}>
            <Image
            src={imagen}
            width={350}
            height={350}
            alt={`Imagen ${texto}`}/>
          </Link>
          {/* <div className='flecha-container'>
            <span class="text2"></span>
            <span class="flecha2"></span>  
          </div> */}
        </div>
      ))}
    </div>
  )
}

export default Proyecto
