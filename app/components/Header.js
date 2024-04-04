import React from 'react'
import '../css/Header.css'

const Header = (props) => {  
    return (
        <header>
            <a href="/" className='logo'>
                <img src='/images/logo.png' alt="Logo" />
            </a>
            <a href="/" className='Fit'>FitStar</a>
            <div className='navbuttons'>
                <button>Home</button>
                <button>Check Activity</button>
                <button>Demo</button>
                <button>Login/Create Account</button>
            </div>
       </header>
    );
}

export default Header;