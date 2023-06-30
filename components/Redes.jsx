import React from 'react'
import Image from 'next/image';
import Link from 'next/link'

const Redes = (prop) => {
    const {rrss} = prop

    if (!rrss || rrss.length === 0) {
        return null; // Manejar el caso cuando habilidades es undefined o vacío
      }

  return (
    <div className='grid justify-items-center grid-rows-1 grid-flow-col' >
      {rrss.map(({href,imagen},index)=>(
        <div key={index}>

            <Link
            
            href={href}>
                <Image
                src={imagen}
                width={100}
                height={100}
                alt={`Image ${index}`}
                className='habilidades object-contain'
                />
            </Link>
        </div>
      ))}
    </div>
  )
}

export default Redes
