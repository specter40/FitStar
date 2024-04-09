import { useState } from 'react';
import { useRouter } from 'next/router';
import './css/CreateAccount.css';

const CreateAccount = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    // Function to handle form submission
    const handleCreateAccount = async () => {
        if (username.trim() !== '' && email.trim() !== '' && password.trim() !== '') {
            // Redirect to the login page after account creation
            router.push('/SignIn');
        } else {
            alert('Please fill in all fields');
        }
    };

    return (
        <div className="page">
            <h1>Create New Account</h1>
            <h3>Username</h3>
            <input id='username' value={username} onChange={(e) => setUsername(e.target.value)} />
            <h3>Email</h3>
            <input id='email' type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <h3>Password</h3>
            <input id='password' type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleCreateAccount}>Create Account</button>
        </div>
    );
};

export default CreateAccount;