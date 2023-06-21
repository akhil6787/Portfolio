import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.JPG'
import Headersocials from './Headersocials'
const header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Akhil Sharma</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA/>
        <Headersocials/>
        

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href='#contact' className='scroll__down'>Scroll Down</a>


      </div>
    </header>
  )
}

export default header