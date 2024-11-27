import React from 'react'
import Image from 'next/image';

const Habilidad = (props) => {
  const {habilidades} = props;
  
  if (!habilidades || habilidades.length === 0) {
    return null; // Manejar el caso cuando habilidades es undefined o vacío
  }

  return (
    <div className={`grid justify-items-center grid-cols-5`}>
      {habilidades.map((imagen, index) => (
        <div key={index} className="flex items-center justify-center m-1">
          <Image
          key={index}
          src={imagen}
          width={100}
          height={100}
          alt={`Image ${index}`}
          className='habilidades object-contain'/>
        </div>
      ))}      
    </div>
  )
}

export default Habilidad
