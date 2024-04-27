"use client";
import  React from 'react';
import Card from './Card.js';
import Item from './Item.js';
import '../css/Card.css';

const ItemList = (props) => {
    return (
        <div>
            <Card>
            {props.listItems.map((item) => (
                
                    <Item 
                        key={item._id}
                        date={item.date}
                        activity={item.exerciseType}
                        time={item.exerciseDuration}
                        calories={item.caloriesBurned}
                        heart={item.heartRate}          
                    />   
                      
            ))}
            </Card>  
        </div>
    );
}

export default ItemList;