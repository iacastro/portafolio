import React from 'react'
import Habilidad from './Habilidad'

const Aprendiendo = (props) => {
    const {habilidades} = props
    
  return (
    <div>
      <Habilidad habilidades = {habilidades}/>
    </div>
  )
}

export default Aprendiendo
