import React from 'react';
import ReactDOM from 'react-dom';
import online from '../imgs/icon-online.svg'
import budgeting from '../imgs/icon-budgeting.svg'
import onboarding from '../imgs/icon-onboarding.svg'
import api from '../imgs/icon-api.svg'

function Services() {
    return (
        <div className="services">
            <div className="services__title">
                <h1>Why choose Easybank?</h1>
                <p>We leverage Open Banking to turn your bank account into your financial hub.<br/>Control your finances like never before.</p>
            </div>

            <div className="services__list">
                <ul>
                    <li>
                        <img src={online}/>
                        <h1>Online Banking</h1>
                        <p>Our modern web and mobile<br/>
                        applications allow you to keep<br/>
                        track of your finances wherever you<br/>are in the world.</p>
                    </li>
                    <li>
                        <img src={budgeting}/>
                        <h1>Simple Budgeting</h1>
                        <p>See exactly where your money<br/>
                        goes each month. Receive<br/>
                        notifications when you're close to<br/>hitting your limits.</p>
                    </li>
                    <li>
                        <img src={onboarding}/>
                        <h1>Fast Onboarding</h1>
                        <p>We don't do branches. Open your<br/>account in minutes online and start<br/>taking control of your finances<br/>right away.</p>
                    </li>
                    <li>
                        <img src={api}/>
                        <h1>Open API</h1>
                        <p>Manage your savings, investments,<br/>pension and much more from one<br/>account. Tracking your money has<br/>never been easier.</p>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Services;