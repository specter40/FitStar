import "./css/LoggedPage.css";
import React from "react";
import ItemList from "../components/ItemList.js";

const LoggedPage = (props) => {
    const items = [
        
    ]
    
    return (
        <div className="background">
            <h1>Demo</h1>
            <div className="demo">
                <div id="toplevel"><h2>Recent Activity</h2><button>Add Activity</button> </div>
                <div>
                    <ItemList listItems={items} />
                </div>
            </div>
        </div>
    );
};

export default LoggedPage;
