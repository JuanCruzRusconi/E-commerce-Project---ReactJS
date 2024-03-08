import { NavLink } from "react-router-dom"
import linkedinIcon from "../../assets/linkedinIcon.png"
import githubIcon from "../../assets/githubIcon.png"

import "./Footer.css"

const Footer = () => {

    return (

        <div className="footer-container">
            <div className="copyright-container">
                <div className="copyright-signature">
                    <p className="copyright-text">Designed and developed by Juan Cruz Rusconi.</p>
                </div>
                <div className="copyright">
                    <p className="copyright-text">© Copyright 2024.  JCR.</p>
                </div>
                <div className="copyright-contact">
                    <p className="copyright-text">Contact</p>
                </div>
            </div>
        </div>

    )

}

export default Footer