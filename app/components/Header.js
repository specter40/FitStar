"use client";
import React from 'react'
import '../css/Header.css'
import {useRouter} from 'next/navigation'


const Header = (props) => {  
    const router = useRouter()
    const logger = () => {
       if (props.loggedIn) {
           return "Logout"
       }
       else {
           return "Login/Create Account"
       }


   }
    const logHandler = () => {
        if (props.loggedIn) {
            router.push("/");
        }
        else {
          
       }
   }
   const demoHandler = () => {
       router.push("/demo")
   }


   const statusLog = logger()

    
    
    return (
        <header>
            <a href="/" className='logo'>
                <img src='/images/logo.png' alt="Logo" />
            </a>
            <a href="/" className='Fit'>FitStar</a>
            <div className='navbuttons'>
                <button>Home</button>
                <button>Check Activity</button>
                <button on onClick={demoHandler}>Demo</button>
                <button onClick={logHandler}>{statusLog}</button>
            </div>
       </header>
    );
}

export default Header;