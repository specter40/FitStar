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
                        day={item.day}
                        activity={item.activity}
                        time={item.time}
                        calories={item.calories}
                        heart={item.heart}          
                    />   
                      
            ))}
            </Card>  
        </div>
    );
}

export default ItemList;