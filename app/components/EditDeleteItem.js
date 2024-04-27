'use client';

// source imports
import React from 'react';

// css import
import '../css/AddItem.css';
import axios from 'axios';

const EditDeleteItem = () => {
    const [enteredDate, setEnteredDate] = React.useState('');
    const [enteredExerciseType, setEnteredExerciseType] = React.useState('');
    //const [enteredIndoorOutdoor, setEnteredIndoorOutdoor] = React.useState('');
    //const [enteredDistance, setEnteredDistance] = React.useState('');
    const [enteredCaloriesBurned, setEnteredCaloriesBurned] = React.useState('');
    //const [enteredBodyTrainType, setEnteredBodyTrainType] = React.useState('');
    //const [enteredWeight, setEnteredWeight] = React.useState('');
    //const [enteredReps, setEnteredReps] = React.useState('');
    //const [enteredSets, setEnteredSets] = React.useState('');
    //const [enteredDistanceHiking, setEnteredDistanceHiking] = React.useState('');
    //const [enteredModerateAdvanced, setEnteredModerateAdvanced] = React.useState('');
    //const [enteredIndoorOutdoorCycling, setEnteredIndoorOutdoorCycling] = React.useState('');
    //const [enteredDistanceCycling, setEnteredDistanceCycling] = React.useState('');
    //const [enteredDistanceSwimming, setEnteredDistanceSwimming] = React.useState('');
    const [enteredHeartRate, setHeartRate] = React.useState('');
    const [enteredExerciseDuration, setExerciseDuration] = React.useState('');

    const dateHandler = (event) => {
        setEnteredDate(event.target.value);
    };

    const exerciseTypeHandler = (event) => {
        const selectedOptions = Array.from(event.target.selectedOptions, option => option.value);
        setEnteredExerciseType(selectedOptions);
    };

    /*const indoorOutdoorHandler = (event) => {
        setEnteredIndoorOutdoor(event.target.value);
    };

    const distanceHandler = (event) => {
        setEnteredDistance(event.target.value);
    };
    */

    const caloriesHandler = (event) => {
        setEnteredCaloriesBurned(event.target.value);
    };

    /*
    const bodyTrainHandler = (event) => {
        const selectedOptions = Array.from(event.target.selectedOptions, option => option.value);
        setEnteredBodyTrainType(selectedOptions);
    };

    const weightHandler = (event) => {
        setEnteredWeight(event.target.value);
    };

    const repsHandler = (event) => {
        setEnteredReps(event.target.value);
    };

    const setsHandler = (event) => {
        setEnteredSets(event.target.value);
    };

    const distanceHikingHandler = (event) => {
        setEnteredDistanceHiking(event.target.value);
    };

    const moderateAdvancedHandler = (event) => {
        setEnteredModerateAdvanced(event.target.value);
    };

    const indoorOutdoorCyclingHandler = (event) => {
        setEnteredIndoorOutdoorCycling(event.target.value);
    };

    const distanceCyclingHandler = (event) => {
        setEnteredDistanceCycling(event.target.value);
    };

    const distanceSwimmingHandler = (event) => {
        setEnteredDistanceSwimming(event.target.value);
    };
    */

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
            //indoorOutdoor: enteredIndoorOutdoor,
            //distance: enteredDistance,
            caloriesBurned: enteredCaloriesBurned,
            //bodyTrainType: enteredBodyTrainType,
            //weight: enteredWeight,
            //reps: enteredReps,
            //sets: enteredSets,
            //distanceHiking: enteredDistanceHiking,
            //moderateAdvanced: enteredModerateAdvanced,
            //indoorOutdoorCycling: enteredIndoorOutdoorCycling,
            //distanceCycling: enteredDistanceCycling,
            //distanceSwimming: enteredDistanceSwimming,
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
                <div class="chunk">
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

                        {/* <div class="chunk">
                            <label for="indoor_outdoor">Indoor or Outdoor Run, Walk, or Jog?</label>
                            <br />
                            <select id="indoor_outdoor"
                                value={enteredIndoorOutdoor}
                                onChange={indoorOutdoorHandler}
                            >
                                <option>Indoor</option>
                                <option>Outdoor</option>
                            </select>

                            <br />
                        </div> */}

                        {/* <div class="chunk">
                            <label for="distance">Distance for Run, Walk, or Jog?</label>
                            <br />
                            <input id="distance"
                                type="number"
                                value={enteredDistance}
                                onChange={distanceHandler} 
                            />
                            <span> mi</span>

                            <br />
                        </div> */}

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

                    {/* <div class="column">

                        <div class="chunk">
                            <label for="body_train_type">Which part of your body did you train?</label>
                            <select multiple id="body_train_type"
                                value={enteredBodyTrainType} 
                                onChange={bodyTrainHandler}
                            >
                                    <option>Legs - Quads</option>
                                    <option>Legs - Hamstrings </option>
                                    <option>Legs - Calves</option>
                                    <option>Legs - Glutes</option>
                                    <option>Core Strength - Abs</option>
                                    <option>Arms - Biceps</option>
                                    <option>Arms - Triceps</option>
                                    <option>Arms - Shoulders</option>
                                    <option>Arms - Forearms</option>
                                </select>

                            <br />
                        </div>

                    </div> */}

                    {/* <div class="column">
                
                        <div class="chunk">
                            <label for="weight">Weight Used:</label>
                            <br />
                            <input id="weight"
                                type="number"
                                value={enteredWeight}
                                onChange={weightHandler}
                            />
                            <span> lbs</span>

                            <br />
                        </div> */}

                        {/* <div class="chunk">
                            <label for="reps_and_sets">How many sets and reps did you do?</label>
                            <br />
                            <input id="sets"
                                type="number"
                                value={enteredSets}
                                onChange={setsHandler}
                            />
                            <span> sets of </span>
                            <input id="reps"
                                type="number"
                                value={enteredReps}
                                onChange={repsHandler}
                            />
                            <span> reps</span>

                            <br />
                        </div> */}

                        {/* <div class="chunk">
                            <label for="distance_hiking">Distance for hiking</label>
                            <br />
                            <input id="distance_hiking"
                                type="number"
                                value={enteredDistanceHiking}
                                onChange={distanceHikingHandler}
                            />
                            <span> mi</span>

                            <br />
                        </div>

                    </div>

                    <div class="column"> */}

                        {/* <div class="chunk">
                            <label for="moderate_advanced">Moderate or Advanced hiking?</label>
                            <br />
                            <select id="moderate_advanced"
                                value={enteredModerateAdvanced}
                                onChange={moderateAdvancedHandler}
                            >
                                <option>Moderate</option>
                                <option>Advanced</option>
                            </select>

                            <br />
                        </div> */}

                        {/* <div class="chunk">
                            <label for="indoor_outdoor_cycling">Indoor or Outdoor Cycling?</label>
                            <br />
                            <select id="indoor_outdoor_cycling"
                                value={enteredIndoorOutdoorCycling}
                                onChange={indoorOutdoorCyclingHandler}
                            >
                                <option>Indoor</option>
                                <option>Outdoor</option>
                            </select>

                            <br />
                        </div> */}

                        {/* <div class="chunk">
                            <label for="distance_cycling">Distance Cycling?</label>
                            <br />
                            <input id="distance_cycling"
                                type="number"
                                value={enteredDistanceCycling}
                                onChange={distanceCyclingHandler}
                            />
                            <span> mi</span>

                            <br />
                        </div> */}

                        {/* <div class="chunk">
                            <label for="distance_swimming">Distance Cycling?</label>
                            <br />
                            <input id="distance_swimming"
                                type="number"
                                value={enteredDistanceSwimming}
                                onChange={distanceSwimmingHandler}
                            />
                            <span> mi</span>

                            <br />
                        </div> */}
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
