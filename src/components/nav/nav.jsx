import React from 'react'
import './nav.css'
import {FcHome} from 'react-icons/fc'
import {FcAbout} from 'react-icons/fc'
import {BiFoodMenu} from 'react-icons/bi'
// import { useState } from 'react'

const Nav = () => {
  // const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      {/* <a href="#" className={activeNav === '#'? 'active':''}><FcHome/></a> */}
      <a href="#" className='active'><FcHome/></a>
      {/* <a href="#about" onClick={()=> setActiveNav('#about')}
      className={activeNav === '#about'? 'active':''}
      ><FcAbout/></a> */}
      <a href="#food"><BiFoodMenu/></a>

    </nav>
  )
}

export default Nav