import React from 'react'
import Image from 'next/image';

const Habilidad = (props) => {
  const {habilidades} = props;
  
  if (!habilidades || habilidades.length === 0) {
    return null; // Manejar el caso cuando habilidades es undefined o vacío
  }

  return (
    <div className='grid justify-items-center grid-rows-1 gap-y-4 grid-flow-col'>
      {habilidades.map((imagen, index) => (
        <div>
          <Image
          key={index}
          src={imagen}
          width={100}
          height={100}
          alt={`Image ${index}`}
          className='habilidades object-contain '/>
        </div>
      ))}      
    </div>
  )
}

export default Habilidad
