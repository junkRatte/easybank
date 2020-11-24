import React from 'react';
import ReactDOM from 'react-dom';
import logo2 from '../imgs/logo-2.svg'
import facebook from '../imgs/icon-facebook.svg'
import youtube from '../imgs/icon-youtube.svg'
import twitter from '../imgs/icon-twitter.svg'
import pinterest from '../imgs/icon-pinterest.svg'
import instagram from '../imgs/icon-instagram.svg'

function Footer() {
    return (
        <div className="footer">
            <div className="footer__content">
                <div className="footer__content--social">
                    <img className="logo-2" src={logo2}/>

                    <div className="icons">
                        <a href="#"><img src={facebook}/></a>
                        <a href="#"><img src={youtube}/></a>
                        <a href="#"><img src={twitter}/></a>
                        <a href="#"><img src={pinterest}/></a>
                        <a href="#"><img src={instagram}/></a>
                    </div>
                </div>

                <div className="footer__content--list">
                    <ul>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">Blog</a></li>
                    </ul>
                    <ul>
                        <li><a href="#">Careers</a></li>
                        <li><a href="#">Support</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Footer;