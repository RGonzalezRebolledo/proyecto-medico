import React from 'react'
import '@/components/Navbar/Navbar.css'
import Link from 'next/link'

const Navbar = () => {
  return (
      <div className="navbar">
      {/* <header className="navbar"> */}
      <nav >
          <ul>
          <li><Link href='/'>Inicio</Link></li>
              <li><Link href='/Register'>Registro</Link></li>
              <li><Link href='/login'>Inicio Sesión</Link></li>
          </ul>
      </nav>
  {/* </header> */}
  </div>
  )
}

export default Navbar