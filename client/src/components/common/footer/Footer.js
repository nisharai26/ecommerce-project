import React from 'react'
import './Footer.css'
import Twitter from '../footer/images/twitter.png'
import Instagram from './images/instagram.png'
import Facebook from './images/facebook.png'

const Footer = () => {
    return(
        <div className='footer-container'> 
            <div className='footer-left'>
                logo
            </div>
            <div className='footer-center'>
                <ul>
                    <li>Call Us: 07736969377</li>
                    <li>Address: 85 Maple Street</li>
                    <li>Liverpool, L3 8JC</li>
                </ul>
            </div>
            <div className='footer-right'>
                <img src={Twitter} alt='twitter'/>
                <img src={Instagram} alt='instagram'/>
                <img src={Facebook} alt='facebook'/>
            </div>
        </div>
    )
}

export default Footer;