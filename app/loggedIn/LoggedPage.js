"use client";
import { useEffect } from 'react';
import axios from 'axios';
import "./css/LoggedPage.css";
import React from "react";
import ItemList from "../components/ItemList.js";
import { useRouter } from 'next/navigation';

const LoggedPage = (props) => {
   const [items, setItems] = React.useState([]);

    const router = useRouter()
    useEffect (() => {
        axios.get('http://localhost:8085/api/items') 
        .then(res => {
            console.log(res.data);
            setItems(res.data);
        })
        .catch(err => {
            console.error(err);
        });
    });
    
    return (
        <div className="background">
            <h1>Hello User!</h1>
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
