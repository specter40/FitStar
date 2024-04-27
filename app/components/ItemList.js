"use client";
import  React from 'react';
import Card from './Card.js';
import Item from './Item.js';
import axios from 'axios';
import '../css/Card.css';

const ItemList = (props) => {
    const deleteItem = async (itemId) => {
        try {
            await axios.delete(`http://localhost:8085/api/items/${itemId}`);
            const updatedItems = props.listItems.filter(item => item._id !== itemId);
            props.setItems(updatedItems);
            console.log("Item deleted successfully");
        } catch (err) {
            console.error("Error deleting item: ", err);
        }
    };
    
    return (
        <div>
            <Card>
            {props.listItems.map((item) => (
                <div key={item._id}>
                    <Item 
                        key={item._id}
                        date={item.date}
                        activity={item.exerciseType}
                        time={item.exerciseDuration}
                        calories={item.caloriesBurned}
                        heart={item.heartRate}          
                    />   
                    <button className="deleteBt" onClick={() => deleteItem(item._id)}>Delete</button>
                </div>    
            ))}
            </Card>  
        </div>
    );
}

export default ItemList;