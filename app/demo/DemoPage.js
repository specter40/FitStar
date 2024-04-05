import "./css/DemoPage.css";
import React from "react";
import Card from "../components/Card.js";
import ItemList from "../components/ItemList.js";

const DemoPage = (props) => {
    const items = [
        {   day: "Monday",
            activity: "Running",
            time: 30,
            calories: 300,
            heart: 120
        },
        {   day: "Tuesday",
            activity: "Swimming",
            time: 45,
            calories: 400,
            heart: 130
        },
        {   day: "Wednesday",
            activity: "Cycling",
            time: 60,
            calories: 500,
            heart: 140
        },
        {   day: "Thursday",
            activity: "Running",
            time: 30,
            calories: 300,
            heart: 120
        },
        {   day: "Friday",
            activity: "Swimming",
            time: 45,
            calories: 400,
            heart: "n/a"
        },
        {   day: "Saturday",
            activity: "Cycling",
            time: 60,
            calories: 500,
            heart: 140
        }
    ]
    
    return (
        <div>
            <div className="title"><h1>Demo</h1></div>
            <div>
                <ItemList listItems={items} />
            </div>
        </div>
    );
};

export default DemoPage;
