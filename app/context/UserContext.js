"use client"

import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const UserContext = createContext();

export const UserProvider = ({ children }) => { 
    const [userData, setUserData] = useState({
        token: undefined,
        user: undefined
    });
    
    useEffect(() => {
        const token = localStorage.getItem("auth-token");
        if (token) {
            setUserData(prev => ({
                ...prev,
                token: token,
            }));
            axios.get("http://localhost: 8086/api/users", {
                headers: { "x-auth-token": token }
            })
            .then((res) => {
                console.log(res.data);
                setUserData(prev => ({
                    ...prev,
                    user: res.data
                }));
            })
            .catch((err) => {
                console.log("Error in fetching user data: ", err);
            });
        }
    }, []);

    return (
        <UserContext.Provider value={{ userData, setUserData }}>
            {children}
        </UserContext.Provider>
    );
};

 export default UserContext;
