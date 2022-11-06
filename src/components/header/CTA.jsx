import React from 'react'
import CV from '../../assets/Men.png'
const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>Download Menu</a>
        <a href="#contacts" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA