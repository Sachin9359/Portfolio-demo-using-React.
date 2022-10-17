import React from 'react'
import './footer.css'
import Github from "../../svg/social-1_logo-github.svg"
import LinkedIn from "../../svg/social-1_logo-linkedin.svg"
import Instagram from "../../svg/social-1_logo-instagram.svg"

const Footer = () => {
  return (
    <div className='footer'>
      <div className="mail">sachingautam@gmail.com
      </div>
      <div className="f-socialmedia">
        <a href='https://github.com/' target="_blank" rel="noreferrer">
          <img src={Github} alt="Github" />
        </a>
        <a href='https://linkedin.com/' target="_blank" rel="noreferrer">
          <img src={LinkedIn} alt="LinkedIn" />
        </a>
        <a href='https://instagram.com/' target="_blank" rel="noreferrer">
          <img src={Instagram} alt="Instagram" />
        </a>
      </div>
    </div>
  )
}

export default Footer