import React from 'react'
import "./navbar.css"
import { Link } from 'react-scroll'

const Navbar = () => {
    return (
        <div className="n-wrapper">
            <div className="n-left">
                <div className="n-name">Sachin</div>
            </div>
            <div className="n-right">
                <div className="n-list">
                    <ul>
                        <Link spy={true} to='Navbar' smooth={true} activeClass='activeClass'>
                            <li className='list-item'>Home</li>
                        </Link>
                        <Link spy={true} to='Services' smooth={true} >
                            <li className='list-item'>Services</li>
                        </Link>
                        <Link spy={true} to='Experience' smooth={true} >
                            <li className='list-item'>Experience</li>
                        </Link>
                        <Link spy={true} to='Testimonials' smooth={true} >
                            <li className='list-item'>Testimonials</li>
                        </Link>
                    </ul>
                </div>
                <Link spy={true} to='Contactus' smooth={true} >
                    <button className="button con-button">Contact us</button>
                </Link>
            </div>
        </div>
    )
}

export default Navbar