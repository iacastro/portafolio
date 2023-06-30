import React from 'react'
import Link from 'next/link'


export default function NavBar() {
  return (
    <nav className='bg-black flex justify-end space-x-1.5 font-sans seccion-1'>
      <Link
      href="/"
      className='nav text-glow flex-initial-32'
      >
        Inicio
      </Link>
      
      <Link
      href="/"
      className='nav text-glow flex-initial-32'>
        Sobre Mi
      </Link>

      <Link
      href="/"
      className='nav text-glow flex-initial-32'>
        Contacto
      </Link>

    </nav>
  )
}
