"use client";
import  React from 'react';
import Card from './Card.js';
import Item from './Item.js';

const ItemList = (props) => {
    return (
        <Card className="user">
            {props.listItems.map((item) => (
                <Item 
                    key={item.id}
                    day={item.day}
                    activity={item.activity}
                    time={item.time}
                    calories={item.calories}
                    heart={item.heart}          
                />           
            ))}
        </Card>
    );
}

export default ItemList;