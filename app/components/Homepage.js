import React from 'react';
import '../css/Homepage.css';
const Homepage = () => {
    return (
        <div className='page'>
            <div className='title'>  
               <img className="logo" src='/images/Frame.png' id="titleLogo"alt="Logo" />
               <h1>FitStar</h1>
           </div>

            <h2>Fitness Tracker For Achiteving Your Goals!</h2>
            <a href='/signIn'><button id="start">Click Here To Start</button></a>
        </div>
    );
}

export default Homepage;