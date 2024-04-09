"use client";
import '../signIn/css/SignIn.css';
import { useRouter } from 'next/router';

const SignIn = () => {
    let username = '';
    let password = '';

    // handles login
    const handleLogin = async () => {
        if (username.trim()!== '' && password.trim() !== '') {
            router.push('/demo');
        }
        else{
            alert('Invalid username or password');
        }
    }
    return(
        <div className="page">
            <h1>Welcome</h1>
            <img className="logo" src='/images/Frame.png' id="titleLogo"alt="Logo" />
            <h2>Login</h2>
            <h3>Username</h3>
            <input id='username' value={username} onChange={(event) => setUsername(event.target.value)} />
            <h3>Password</h3>
            <input id='password' type="password" value={password} onChange= {(event) => setPassword(event.target.value)}/>
            <button onClick={handleLogin}>Login</button>
            <a>Create a new account</a>
        </div>
    );
};

export default SignIn;