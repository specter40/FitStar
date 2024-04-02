import React from 'react'
import '../css/Header.css'

const Header = (props) => {  
    return (
        <header>
             
            
            <button className='logo'><img src='/images/Frame.png' alt="Logo" /></button>
            <button className='Fit'> FitStar</button>
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