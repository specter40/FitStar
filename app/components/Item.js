'use client';

import React from 'react';
import '../css/Item.css';
import {useRouter} from 'next/navigation';
 


const Item = (props) => {   

    const router = useRouter();

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
            return <img className="images" src='/images/hiking.png' alt="Hiking" />
        }
        else if (props.activity === "Kickboxing") {
            return <img className="images" src='/images/kickboxing.webp' alt="Kickboxing" />
        }
    };

    const clickHandler = () => {
        router.push('/editDeleteActivity');
        console.log('div clicked');
    }

    return (
        <div className='item' onClick={clickHandler}>
            {images()}
            <h3 id='day'>{props.day}</h3>
            
                <div className='grid'>
                
                <div className="activity">
                    <p className='categories'>Activity:</p><p>{props.activity}</p>
                </div>
                <div className="time">
                    <p className='categories'>Time: </p> <p>{props.time} minutes</p>
                </div>
                <div className="calories">
                    <p className='categories'>Calories:</p> <p> {props.calories}</p>
                </div>
                <div className="heart">
                    <p className='categories'> Heart Rate:</p> <p> {props.heart}</p>
                </div>
            </div>
        </div>


    );


}

export default Item;