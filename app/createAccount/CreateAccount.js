import { useState, useContext } from 'react';
import axios from 'axios';
import '../createAccount/css/CreateAccount.css';
import UserContext from '../context/UserContext';
import Link from 'next/link';

const CreateAccount = () => {
    //const { setUserData } = useContext(UserContext);
    // State to manage form inputs
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    });

    // Function to handle form input changes
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Function to handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.post('http://localhost:8085/api/users/signup', formData);
            console.log("great success!");
            const loginRes = await axios.post('http://localhost:8085/api/users/login', {
                email: formData.email,
                password: formData.password
            });
            
            setUserData({
                token: loginRes.data.token,
                user: loginRes.data.user
            });
            localStorage.setItem('auth-token', loginRes.data.token);
            router.push("/loggedIn");
            console.log(res.data); 
        } catch (err) {
            console.error('Signup failed', err);
        }
    };
    

    return (
        <div className='page'>
            <form onSubmit={handleSubmit}>
                <div className='starContainer'>
                    <img className="star" src='/images/Star.png' alt="Star" />
                    <h1>Welcome</h1>
                </div>
                <div className='bodyContainer'>
                    <img className="logo" src='/images/Logo.png' alt="Logo" />
                    <h2>Create New Account</h2>
                    <h3>Username</h3>
                    <input type="text" name="username" value={formData.username} onChange={handleChange} />
                    <h3>Email</h3>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} />
                    <h3>Password</h3>
                    <input type="password" name="password" value={formData.password} onChange={handleChange} />
                    <button className='accountBt' type="submit">Create Account</button>
                    <h3>Already have an account? <Link href="/signIn">Sign In</Link></h3>
                </div>
               
            </form>
            
        </div>
    );
};

export default CreateAccount;

// "use client"
// import './css/CreateAccount.css';

// const CreateAccount = () => {
//     let username = '';
//     let password = '';
//     let email = '';

//     // Function to handle form submission
//     const handleCreateAccount = async () => {
//         if (username.trim() !== '' && email.trim() !== '' && password.trim() !== '') {
//             // Redirect to the login page after account creation
//             router.push('/SignIn');
//         } else {
//             alert('Please fill in all fields');
//         }
//     };

//     return (
//         <div className="page">
//             <h1>Create New Account</h1>
//             <h3>Username</h3>
//             <input id='username' value={username} onChange={(e) => setUsername(e.target.value)} />
//             <h3>Email</h3>
//             <input id='email' type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
//             <h3>Password</h3>
//             <input id='password' type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
//             <button onClick={handleCreateAccount}>Create Account</button>
//         </div>
//     );
// };

// export default CreateAccount;