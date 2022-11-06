import React from 'react'
import {AiFillLinkedin} from 'react-icons/ai'
import {IoLogoGithub} from 'react-icons/io'
import {FcDribbble} from 'react-icons/fc'
const headersocials = () => {
  return (
    <div className='header__socials'>
        <a href="https:linkedin.com" target="blank"><AiFillLinkedin/></a>
        <a href="https:github.com" target="blank"><IoLogoGithub/></a>
        <a href="https:dribbble.com" target="blank"><FcDribbble/></a>

    </div>
  )
}

export default headersocials