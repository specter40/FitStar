"use client";
import React from 'react';
import '../css/Homepage.css';
import UserContext from '../context/UserContext';
import { useContext } from 'react';
import {useRouter} from 'next/navigation';
const Homepage = () => {
    const router = useRouter();
    const {userData, setUserData} = useContext(UserContext);
    console.log(userData);
    const isLoggedIn = userData.user !== undefined;

    const startHandler = () => {
        // localStorage.removeItem("auth-token");
        // setUserData({token: undefined, user: undefined});
        if (isLoggedIn) {
            router.push("/loggedIn");
        } else {
            router.push("/createAccount");
        }
        
    }
    return (
        <div className='page'>
            <div className='title'>  
               <img className="logo" src='/images/Frame.png' id="titleLogo"alt="Logo" />
               <h1>FitStar</h1>
           </div>

            <h2>Fitness Tracker For Achiteving Your Goals!</h2>
            <button id="start" onClick={startHandler}>Click Here To Start</button>
        </div>
    );
}

export default Homepage;