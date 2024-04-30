'use client';

import React, {useState} from 'react';
import '../css/Item.css';
import {useRouter} from 'next/navigation';
import Header from './Header';
import EditDeleteItem from '../editDeleteActivity/EditDeleteItem';


const Item = (props) => {   

    const router = useRouter();
    const itemID = props.objectID;
    //console.log(itemID);

    const images = () => {
        if (props.activity === "Running") {
            return <img className="images" src='/images/running.webp' alt="Running" />
        }
        else if (props.activity === "Swimming") {
            return <img className="images"src='/images/swimming.jpeg' alt="Swimming" />
        }
        else if (props.activity === "Cycling") {
            return <img className="images" src='/images/cycling.jpeg' alt="Cycling" />
        }
        else if (props.activity === "Walking") {
            return <img className="images" src='/images/walking.jpeg' alt="Walking" />
        }
        else if (props.activity === "Weight Training") {
            return <img className="images" src='/images/weight_training.jpeg' alt="Weight Training" />
        }
        else if (props.activity === "Hiking") {
            return <img className="images" src='/images/hiking.webp' alt="Hiking" />
        }
        else if (props.activity === "Stretching") {
            return <img className="images" src='/images/stretching.webp' alt="Stretching" />
        }
        else if (props.activity === "Kickboxing") {
            return <img className="images" src='/images/kickboxing.webp' alt="Kickboxing" />
        }
    };
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const day = weekday[new Date(props.date).getDay()];

    const date = new Date(props.date);
    const dayNum = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const fullDate = month + "/" + dayNum + "/" + year;
    const [showEDI, setShowEDI] = useState(false);
    const [showItem, setShowItem] = useState(true);

    const clickHandler = (id) => {
        // using router.push to move from here to EditDeleteItem
        /*router.push(`/editDeleteActivity?id=${id}`);
        console.log("editDeleteActivity page pushed with item id: ", itemID);*/
        //console.log(propFromHandler);
        setShowEDI(true);
        setShowItem(false);
        console.log("are we showing EditDeleteItem?", showEDI);
    };

    return (
        <div>
            <div>
                {showItem
                &&
                <div className='item' onClick={(event) => clickHandler(itemID)}>
                    {images()}
                    <h3 id='day'>{day}</h3>
                    <div><h3 id='dateInitial'>{fullDate}</h3></div>
                        <div className='grid'>
                        
                        <div className="activity">
                            <p className='categories'>Activity:</p><p>{props.activity}</p>
                        </div>
                        <div className="time">
                            <p className='categories'>Time: </p> <p>{props.time} minutes</p>
                        </div>
                        <div className="calories">
                            <p className='categories'>Calories:</p> <p> {props.calories} calories</p>
                        </div>
                        <div className="heart">
                            <p className='categories'> Heart Rate:</p> <p> {props.heart} bpm</p>
                        </div>
                    </div>
                </div>
                }       
            </div>
            <div>
                {showEDI 
                && 
                <EditDeleteItem 
                    itemID={props.objectID}
                    date={props.date}
                    activity={props.activity}
                    time={props.time}
                    calories={props.calories}
                    heart={props.heart}
                />
                }
            </div>
        </div>
        
    );


}

export default Item;