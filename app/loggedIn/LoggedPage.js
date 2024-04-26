"use client";
import "./css/LoggedPage.css";
import React from "react";
import ItemList from "../components/ItemList.js";
import { useRouter } from 'next/navigation';
import { useEffect, useContext } from 'react';
import UserContext from '../context/UserContext';
import axios from 'axios';
import { useContext } from "react";
import UserContext from "../context/UserContext";


const LoggedPage = () => {
   const [items, setItems] = React.useState([]);
   const { userData } = useContext(UserContext);

    const router = useRouter()
    useEffect (() => {
        const fetchItems = async () => {
            try {
                const res = await axios.get('http://localhost:8085/api/items', {
                    headers: { "x-auth-token": userData.token }
                });
                setItems(res.data);
            } catch (error) {
                console.error("Error fetching items: ", error);
            }
        };
        fetchItems();
    }, [userData.token]);
    
    return (
        <div className="background">
            <h1>Hello {userData.user ? userData.user.username : 'User'}!</h1>
            <div className="demo">
                <div id="toplevel"><h2>Recent Activity</h2><button onClick={() => router.push('/add-activity')}>Add Activity</button> </div>
                <div>
                    <ItemList listItems={items} />
                </div>
            </div>
        </div>
    );
};

export default LoggedPage;
