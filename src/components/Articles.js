import React from 'react';
import ReactDOM from 'react-dom';
import currency from '../imgs/image-currency.jpg';
import restaurant from '../imgs/image-restaurant.jpg';
import plane from '../imgs/image-plane.jpg';
import confetti from '../imgs/image-confetti.jpg';

function Articles() {
    return (
        <div className="articles">
            <div className="articles__title">
                <h1>Latest Articles</h1>
            </div>

            <div className="articles__cards">
                <ul>
                    <li>
                        <img src={currency}/>
                        <br/>
                        <small>By Claire Robinson</small>
                        <h1>Receive money in any<br/>
                        currency with no fees</h1>
                        <p>The world is getting smaller and<br/>
                        we're becoming more mobile. So<br/>
                        why should you be forced to only<br/>
                        receive money in a single...</p>
                    </li>

                    <li>
                        <img src={restaurant}/>
                        <br/>
                        <small>By Wilson Hutton</small>
                        <h1>Treat yourself without<br/>
                        worrying about money</h1>
                        <p>Our simple budgeting feature<br/>
                        allows you to separate out your<br/>
                        spending and set realistic limits<br/>
                        each month. That means you...</p>
                    </li>
                    <li>
                        <img src={plane}/>
                        <br/>
                        <small>By Wilson Hutton</small>
                        <h1>Take your Easybank card<br/>
                        wherever you go</h1>
                        <p>We want you to enjoy your travels.<br/>
                        This is why we don't change any<br/>
                        fees on purchases while you're<br/>
                        abroad. We'll even show you...</p>
                    </li>
                    <li>
                        <img src={confetti}/>
                        <br/>
                        <small>By Claire Robinson</small>
                        <h1>Our invite-only Beta<br/>
                        accounts are now live!</h1>
                        <p>After a lot of hard work by the<br/>
                        whole team, we're excited to launch<br/>
                        our closed beta. It's easy to request<br/>
                        an invite through the site...</p>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Articles;