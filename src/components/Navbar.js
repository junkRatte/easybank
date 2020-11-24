import React from 'react';
import ReactDOM from 'react-dom';
import logo from '../imgs/logo.svg';
import hamburger from '../imgs/icon-hamburger.svg';

function Navbar() {
    function dropDown() {
        let dropdownMenu = document.getElementById('nav-list');

        if (dropdownMenu.className === "nav-list") {
            dropdownMenu.className += " responsive";
        } else {
            dropdownMenu.className = "nav-list";
        }
    }

    return (
        <nav>
            <div className="navbar">
                <a href="#"><img src={logo} className="logo"/></a>

                <ul id="nav-list">
                    <li ><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Careers</a></li>
                </ul>

                <button className="btn">Request Invite</button>

                <img src={hamburger} className="hamburger" id="hamburger"
                onClick={dropDown}/>
            </div>
        </nav>
    );
}

export default Navbar;