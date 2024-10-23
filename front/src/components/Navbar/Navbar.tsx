import React from 'react'
import '@/components/Navbar/Navbar.css'
import Link from 'next/link'
import { register } from 'module'

const Navbar = () => {
  return (
      <div className="navbar">
      {/* <header className="navbar"> */}
      <nav >
          <ul>
          <li><Link href='/'>Inicio</Link></li>
              <li><Link href='/Register'>Registro</Link></li>
              {/* <li><a href="#about">Acerca de</a></li>
              <li><a href="#services">Servicios</a></li>
              <li><a href="#contact">Contacto</a></li> */}
          </ul>
      </nav>
  {/* </header> */}
  </div>
  )
}

export default Navbar