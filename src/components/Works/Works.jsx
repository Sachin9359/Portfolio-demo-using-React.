import React from 'react'
import './Works.css'
import Github from "../../svg/social-1_logo-github.svg"
import LinkedIn from "../../svg/social-1_logo-linkedin.svg"
import Instagram from "../../svg/social-1_logo-instagram.svg"
import Facebook from "../../svg/social-1_logo-facebook.svg"
import Google from "../../svg/social-1_logo-google-plus.svg"

const Works = () => {
    return (
        <div className="works">
            <div className="i-left">
                <div className="i-name">
                    <span>Work for all these</span>
                    <span>Brand and Companies</span>
                    <span>Frontend developer with high level experience in web designing and developent, productig the quality work.
                        <br />
                        Frontend developer with high level experience in web designing and developent, productig the quality work.
                    </span>
                </div>
                <button className="button i-button">Hire me</button>
            </div>
            <div className="w-right">
                <div className="w-icons">
                    <div>
                        <div className="w-icon">
                            <img src={Github} alt="" />
                        </div>
                    </div>
                    <div>
                        <div className="w-icon">
                            <img src={Instagram} alt="" />
                        </div>
                        <div className="w-icon">
                            <img src={Google} alt="" />
                        </div>
                        <div className="w-icon">
                            <img src={LinkedIn} alt="" />
                        </div>
                    </div>
                    <div>
                        <div className="w-icon">
                            <img src={Facebook} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Works