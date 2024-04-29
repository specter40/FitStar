"use client"
import "./css/DemoPage.css";
import React, {useState, useEffect, useContext} from "react";
import Card from "../components/Card.js";
import ItemList from "../components/ItemList.js";
import { useRouter } from "next/navigation";
import { resolve } from "styled-jsx/css";
import axios from "axios";
import UserContext from '../context/UserContext';

const DemoPage = () => {
    const router = useRouter();

    const [userItems, setUserItems] = useState([]);
    const {userData} = useContext(UserContext);
    //console.log(userData);
    
    // calling mongo for data for user items 
    const getUserItems = async (user) => {
        try {
            await axios.get(`http://localhost:8085/api/items/${user}`)
                .then(res => {
                    setUserItems(res.data);
                    console.log(userItems);
                });
        } catch (err) {
            console.error('Error: ', err);
        }
    };

    /*const items = [
        {   day: "Saturday",
            activity: "Cycling",
            time: 60,
            calories: 500,
            heart: 140
        },
        {   day: "Friday",
            activity: "Swimming",
            time: 45,
            calories: 400,
            heart: "n/a"
        },
        {   day: "Thursday",
            activity: "Running",
            time: 30,
            calories: 300,
            heart: 120
        },
        {   day: "Wednesday",
            activity: "Cycling",
            time: 60,
            calories: 500,
            heart: 140
        },
        {   day: "Tuesday",
            activity: "Swimming",
            time: 45,
            calories: 400,
            heart: 130
        },
        {   day: "Monday",
        activity: "Running",
        time: 30,
        calories: 300,
        heart: 120
        }
    ];*/

    useEffect(() => {
        getUserItems(userData.user.username);
    }, []);
    
    return (
        <div className="background">
            <div className="container">
                <h1>Demo</h1>
                <div className="demo">
                    <div><h2>Recent Activity</h2><button onClick={() => router.push('/add-activity')}>Add Activity</button> </div>
                    <div>
                        <ItemList listItems={userItems} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DemoPage;
