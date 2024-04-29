'use client';

// source imports
import React from 'react';
//import {useRouter} from 'next/router';

// css import
import './css/EditDeleteItem.css';
import axios from 'axios';

const EditDeleteItem = (props) => {
    // accessing item ID through ROUTER QUERY PARAMETER, NOT PROPS
    // IM TRYING TO FIGURE OUT THE PROPS SITUATION
    //const router = useRouter();

    // get item data from API by item ID
    // OR get it through a prop somehow

    const [enteredDate, setEnteredDate] = React.useState(props.date);
    //const [enteredExerciseType, setEnteredExerciseType] = React.useState(props.activity);
    // ***** THIS IS WHERE I AM RIGHT NOW, TRYING TO FIGURE OUT HOW TO MAKE THE FORM SELECT PROPS.ACTIVITY *******
    const [enteredExerciseType, setEnteredExerciseType] = React.useState(props.activity || []);
    const [enteredCaloriesBurned, setEnteredCaloriesBurned] = React.useState(props.calories);
    const [enteredHeartRate, setHeartRate] = React.useState(props.heart);
    const [enteredExerciseDuration, setExerciseDuration] = React.useState(props.time);

    console.log(props);
    console.log(enteredExerciseType);

    const dateHandler = (event) => {
        setEnteredDate(event.target.value);
    };

    const exerciseTypeHandler = (event) => {
        const selectedOptions = Array.from(event.target.selectedOptions, option => option.value);
        setEnteredExerciseType(selectedOptions);
    };    

    const caloriesHandler = (event) => {
        setEnteredCaloriesBurned(event.target.value);
    };

    const heartRateHandler = (event) => {
        setHeartRate(event.target.value);
    }

    const exerciseDurationHandler = (event) => {
        setExerciseDuration(event.target.value);
    }

    const updateItemHandler = (event) =>{
        event.preventDefault();
        const itemData = {
            date: enteredDate,
            exerciseType: enteredExerciseType,
            caloriesBurned: enteredCaloriesBurned,
            heartRate: enteredHeartRate,
            exerciseDuration: enteredExerciseDuration
        };
        console.log(itemData);
        /*axios 
            .post('http://localhost:8085/api/items', itemData)
            .then((res) => {         
            console.log("Item created successfully.");
            setEnteredDate('');
            setEnteredExerciseType('');
            setEnteredIndoorOutdoor('');
            setEnteredDistance('');
            setEnteredCaloriesBurned('');
            setEnteredBodyTrainType('');
            setEnteredWeight('');
            setEnteredReps('');
            setEnteredSets('');
            setEnteredDistanceHiking('');
            setEnteredModerateAdvanced('');
            setEnteredIndoorOutdoorCycling('');
            setEnteredDistanceCycling('');
            setEnteredDistanceSwimming('');
            
            router.push("/loggedIn");

            })
            .catch((err) => {
                console.log("Error in creating item." + err);
            });
        */
    }

    const isLoggedIn = true; 

    return (
        <div id="page">
            <div id="main_form">
                <div id="date_container" class="chunk">
                    <label for="date" class="date_style">Date:</label>
                    <input id="date" class="date_style"
                        type="date"
                        value={enteredDate}
                        onChange={dateHandler}  
                    />
                    <br />
                </div>

                <div class="chunk">
                    <label for="heart_rate">Heart Rate:</label>
                    <br />
                    <input id="heart_rate"
                        type="number"
                        value={enteredHeartRate}
                        onChange={heartRateHandler}
                    />
                    <span> bpm</span>

                    <br />
                </div>

                
                <div id="column_container">
                    <div class="column">
                        <div class="chunk">
                            <label for="exercise_type">What kind of exercise did you do?</label>
                            <br />
                            <select multiple id="exercise_type"
                                value={enteredExerciseType}
                                onChange={exerciseTypeHandler}
                            >
                                <option>Weight Training</option>
                                <option>Running</option>
                                <option>Stretching</option>
                                <option>Walking</option>
                                <option>Jogging</option>
                                <option>Cycling</option>
                                <option>Swimming</option>
                                <option>Hiking</option>
                                <option>Kickboxing</option>
                            </select>

                            <br />
                        </div>

                        <div>
                            <div class = "chunk">
                                <label for = "calories_burned"> Calories Burned: </label>
                                <br />
                                    <input id="calories_burned"
                                        type="number"
                                        value={enteredCaloriesBurned}
                                        onChange={caloriesHandler} 
                                    />
                                    <br />
                            </div>
                        </div>

                        <div class="chunk">
                            <label for="exercise_duration">Exercise Duration</label>
                            <br />
                            <input id="exercise_duration"
                                type="number"
                                value={enteredExerciseDuration}
                                onChange={exerciseDurationHandler}
                            />
                            <span> minutes</span>

                            <br />
                        </div>
                        
                    </div>
                </div>
                <form>
                    <button id="update_info" type="button" onClick={updateItemHandler}>Update Activity</button>
                </form>
            </div>
        </div>
    );

};

export default EditDeleteItem;
