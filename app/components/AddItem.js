// source imports
import React from 'react';
import Header from './Header.js';

// css import
import '../css/AddItem.css';


const AddItem = () => {

    return (
        <div>
            <label for="date">Date:</label>
            <input id="date"
                type="date"  
            />

            <label for="exercise_type">What kind of exercise did you do?</label>
            <select id="exercise_type">
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

            <label for="indoor_outdoor">Indoor or Outdoor Run, Walk, or Jog?</label>
            <select id="indoor_outdoor">
                <option>Indoor</option>
                <option>Outdoor</option>
            </select>

            <label for="distance">Distance for Run, Walk, or Jog?</label>
            <input id="distance"
                type="number" 
            />
            <span>mi</span>

            <label for="calories_burned">Calories burned:</label>
            <input id="calories_burned"
                type="number"
            />
            <span>calories</span>

            <label for="weight_train_type">What type of weight training?</label>
            <select multiple id="weight_train_type">
                <option>1</option>
            </select>

            <label for="weight">Weight Used:</label>
            <input id="weight"
                type="number"
            />
            <span>lbs</span>

            <label for="reps_and_sets">How many sets and reps did you do?</label>
            <input id="sets"
                type="number"
            />
            <span> sets of </span>
            <input id="reps"
                type="number"
            />
            <span>reps</span>

            <label for="distance_hiking">Distance for hiking</label>
            <input id="distance_hiking"
                type="number"
            />
            <span>mi</span>

            <label for="moderate_advanced">Moderate or Advanced hiking?</label>
            <select id="moderate_advanced">
                <option>Moderate</option>
                <option>Advanced</option>
            </select>

            <label for="indoor_outdoor_cycling">Indoor or Outdoor Cycling?</label>
            <select id="indoor_outdoor_cycling">
                <option>Indoor</option>
                <option>Outdoor</option>
            </select>

            <label for="distance_cycling">Distance Cycling?</label>
            <input id="distance_cycling"
                type="number"
            />
            <span>mi</span>

            <label for="distance_swimming">Distance Cycling?</label>
            <input id="distance_swimming"
                type="number"
            />
            <span>mi</span>

        </div>
    );

};

export default AddItem;