import React from 'react'
import "./services.css"
import Icon1 from "../../svg/social-1_square-envato.svg"
import Icon2 from "../../svg/social-1_square-envato.svg"
import Icon3 from "../../svg/social-1_square-envato.svg"
import Card from '../Card/Card'

const Services = () => {
    return (
        <div className="services" id='Services'>
            {/* left side */}
            <div className="awesome">
                <span>My Awesome</span>
                <span>Services</span>
                <span>jagjda mdngajmna dhagd ajadga djdgad kb mghdakbda gbd <br />
                    dgahdgbahgdakbadkbdgdb
                </span>
                <button className='button s-button'>Download CV</button>
            </div>
            {/* right side */}
            <div className="cards">
                <div style={{ left: '14rem' }}>
                    <Card
                        emoji={Icon1}
                        heading={"Design"}
                        detail={"Figma, Sketch, Phootoshop"} />
                </div>
                {/* second card */}
                <div style={{ top: '12rem', left: '-4rem' }}>
                    <Card
                        emoji={Icon2}
                        heading={"Design"}
                        detail={"Figma, Sketch, Phootoshop"} />
                </div>
                {/* Third card */}
                <div style={{ top: '19rem', left: '12rem' }}>
                    <Card
                        emoji={Icon3}
                        heading={"Design"}
                        detail={"Figma, Sketch, Phootoshop"} />
                </div>
            </div>
        </div>
    )
}

export default Services