import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocials from './headersocials'
const header = () => {
  return (
    // <div>header</div>
    <header>
      <div className="container header__container">

      <h5>Menú</h5>
      <h1>La terraza</h1>
      <h5 className='text_light'> San Pablo Huixtepec</h5>
            <h5 className='text_light'> San Pablo Huixtepec</h5>

      <CTA/>
      <HeaderSocials/>
      <div className="me">
        <img src={ME} alt="me" />
      </div>
      <a href="#contacts" className='scroll__down'>Elaboro Jaret HL</a>
      </div>
    </header>
  )
}

export default header