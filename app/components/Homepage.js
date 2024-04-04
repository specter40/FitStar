import React from 'react';
import '../css/Homepage.css';
const Homepage = () => {
    return (
        <div className='page'>
            <h1><img src='/images/logo.png' alt="Logo" id="titleLogo"/>FitStar</h1>
            <h2>Fitness Tracker For Achiteving Your Goals!</h2>
            <button id="start">Click Here To Start</button>
        </div>
    );
}

export default Homepage;