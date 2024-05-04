import React from 'react'
import './Footer.css'
import footer_logo from '../assets/logo for Astrophile Nova facial salon2.png'
import instagram_icon from '../assets/instagram_icon.png'
import whatsapp_icon from '../assets/whatsapp_icon.png'

export const Footer = () => {
  return (
    <div className='footer'>
        <ul className="footer-links">
            <li>Company</li>
            <li>Products</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className="footer-social-icon">
            <div className="footer-icon-container">
                <img src={instagram_icon} alt="instagram icon" />
            </div>
            <div className="footer-icon-container">
                <img src={whatsapp_icon} alt="whatsapp icon" />
            </div>
        </div>
        <div className="footer-copyright">
            <hr />
            <p>Copyright @ 2024 - All Right Reserved</p>
        </div>
    </div>
  )
}
