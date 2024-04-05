import '../signIn/css/SignIn.css';
import React from 'react';

const SignIn = () => {
    return(
        <div className="page">
            <h1>Welcome</h1>
            <img className="logo" src='/images/Frame.png' id="titleLogo"alt="Logo" />
            <h2>Login</h2>
            <h3>Username</h3>
            <input id='username'></input>
            <h3>Password</h3>
            <input id='password'></input>
            <button>Login</button>
            <a>Create a new account</a>
        </div>
    );
};

export default SignIn;