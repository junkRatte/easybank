import React from 'react';
import ReactDOM from 'react-dom';
import background from '../imgs/bg-intro-desktop.svg';
import mockup from '../imgs/image-mockups.png';


function Landing() {
    return (
        <div class="landing">
            <div className="landing__left">
                <div className="landing__left--text">
                    <h1>Next generation<br/>digital banking</h1>
                    <p>Take your financial life online. Your Easybank account<br/>will be a one-stop-shop for spending, saving,<br/>budgeting, investing and much more.</p>
                    <button className="btn">Request Invite</button>
                </div>
            </div>


            <div className="landing__right">
                <img className="bg-desktop" src={background}/>
                <img className="mockup" src={mockup}/>
            </div>
        </div>
    );
}

export default Landing;