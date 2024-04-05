import React from 'react';


const Item = (props) => {   
    return (
        <div>
            <li key={props.id} className="user-item"></li>
            <h3>{props.day}</h3>
            <div>
            
                <div className="activity">
                    <p>Activity: {props.activity}</p>
                </div>
                <div className="time">
                    <p>Time: {props.time} minutes</p>
                </div>
                <div className="calories">
                    <p>Calories: {props.calories}</p>
                </div>
                <div className="heart">
                    <p>Heart Rate: {props.heart}</p>
                </div>
            </div>
        </div>


    );


}

export default Item;