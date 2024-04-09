"use client";
import '../signIn/css/SignIn.css';
import {useRouter} from 'next/navigation'

const SignIn = (props) => {
    let username = '';
    let password = '';

    const router = useRouter()
    const createHandler = () => {
        router.push("/createAccount");
    }

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
            <div className="container">
                <img src="/images/Star.png" id="star"/>
                <h1>Welcome</h1>
                <img className="logo" src='/images/Frame.png' id="titleLogo"alt="Logo" />
                <h2>Login</h2>
                <h3>Username</h3>
                <input id='username' value={username} onChange={(event) => setUsername(event.target.value)} />
                <h3>Password</h3>
                <input id='password' type="password" value={password} onChange= {(event) => setPassword(event.target.value)}/>
                <button onClick={handleLogin}>Login</button>
                <a onClick={createHandler}>Create a new account</a>
            </div>
        </div>
    );
};

export default SignIn;