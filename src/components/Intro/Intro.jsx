import React from 'react'
import "./intro.css"
import Github from "../../svg/social-1_logo-github.svg"
import Pic from "../../images/person_2.png"
import LinkedIn from "../../svg/social-1_logo-linkedin.svg"
import Instagram from "../../svg/social-1_logo-instagram.svg"
import { Link } from 'react-scroll'


const Intro = () => {
  return (
    <div className="intro">
        <div className="i-left">
            <div className="i-name">
                <span>Hy! I Am</span>
                <span>Sachin Gautam</span>
                <span>Frontend developer with high level experience in web designing and developent, producing the quality work.</span>
            </div>
            <Link spy={true} to='Contactus' smooth={true} >
                <button className="button i-button">Hire me</button>
            </Link>
            <div className="i-icons">
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
        <div className="i-right">
            <img  className='intro-pic' src={Pic} alt="Sachin Gautam" /> 
        </div>
    </div>
  )
}

export default Intro