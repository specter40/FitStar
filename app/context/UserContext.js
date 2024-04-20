import User from '@/server/model/User';
import { createContent, useState, useEffect } from 'react';
const UserContext = createContent();

export const UserProvider = ({ children }) => { 
    const [userData, setUserData] = useState({
        loggedIn: false,
        user: null
    });
    
    useEffect(() => {
        const token = localStorage.getItem("auth-token");
        if (token) {
            setUserData(prev=> ({
                ...prev,
                token: token,
            }));
            //Optionally, you might want to verify the token with you backend here 
            // and load the user data if the token is still valid.
        }
    }, []);

    return (
        <UserContext.Provider value={{ userData, setUserData }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserContext;
