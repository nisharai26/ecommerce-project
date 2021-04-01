import React from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';
import Basket from './images/basket.png';

const Navbar = (props) => {
    return (
        <div className="navbar">
            <div className="upper-navbar">
                <div className="logo-container">
                    <Link to = "/">{/* <img src="" className="logo"/> */}<h1 className="logo">Logo</h1></Link>
                </div>
                <div class="top-right-nav">
                    <Link to = "/sign-in-up"><div className="log-in-link">Login/Signup</div></Link>
                    <Link to = "/basket"><img src={Basket} alt="Basket icon"/></Link>
                </div>
            </div>
            <div className="lower-navbar">
                <ul>
                    <Link to = '/categories/laptops'><li>Laptops</li></Link>
                    <Link to = '/categories/desktops'><li>Desktops</li></Link>
                    <Link to = '/categories/mobiles'><li>Mobiles</li></Link>
                    <Link to = '/categories/smartwatches'><li>Smartwatches</li></Link>
                    <Link to = '/categories/accessories'><li>Accessories</li></Link>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;