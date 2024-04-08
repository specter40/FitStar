// source imports
import React from 'react';

// css import
import '../css/AddItem.css';


const AddItem = () => {

    return (
        <div id="page">
            <div id="main_form">
                <div class="chunk">
                    <label for="date" class="date_style">Date:</label>
                    <input id="date" class="date_style"
                        type="date"  
                    />
                    <br />
                </div>

                <div id="column_container">
                    <div class="column">
                        <div class="chunk">
                            <label for="exercise_type">What kind of exercise did you do?</label>
                            <br />
                            <select multiple id="exercise_type">
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

                        <div class="chunk">
                            <label for="indoor_outdoor">Indoor or Outdoor Run, Walk, or Jog?</label>
                            <br />
                            <select id="indoor_outdoor">
                                <option>Indoor</option>
                                <option>Outdoor</option>
                            </select>

                            <br />
                        </div>

                        <div class="chunk">
                            <label for="distance">Distance for Run, Walk, or Jog?</label>
                            <br />
                            <input id="distance"
                                type="number" 
                            />
                            <span> mi</span>

                            <br />
                        </div>
                    

                        <div class="chunk">
                            <label for="calories_burned">Calories burned:</label>
                            <br />
                            <input id="calories_burned"
                                type="number"
                            />
                            <span> calories</span>

                            <br />
                        </div>

                        <div class="chunk">
                            <label for="weight_train_type">What type of weight training?</label>
                            <br />
                            <select multiple id="weight_train_type">
                                <option>1</option>
                            </select>

                            <br />
                        </div>

                    </div>

                    <div class="column">
                        <div class="chunk">
                            <label for="weight">Weight Used:</label>
                            <br />
                            <input id="weight"
                                type="number"
                            />
                            <span> lbs</span>

                            <br />
                        </div>

                        <div class="chunk">
                            <label for="reps_and_sets">How many sets and reps did you do?</label>
                            <br />
                            <input id="sets"
                                type="number"
                            />
                            <span> sets of </span>
                            <input id="reps"
                                type="number"
                            />
                            <span> reps</span>

                            <br />
                        </div>

                        <div class="chunk">
                            <label for="distance_hiking">Distance for hiking</label>
                            <br />
                            <input id="distance_hiking"
                                type="number"
                            />
                            <span> mi</span>

                            <br />
                        </div>

                        <div class="chunk">
                            <label for="moderate_advanced">Moderate or Advanced hiking?</label>
                            <br />
                            <select id="moderate_advanced">
                                <option>Moderate</option>
                                <option>Advanced</option>
                            </select>

                            <br />
                        </div>

                        <div class="chunk">
                            <label for="indoor_outdoor_cycling">Indoor or Outdoor Cycling?</label>
                            <br />
                            <select id="indoor_outdoor_cycling">
                                <option>Indoor</option>
                                <option>Outdoor</option>
                            </select>

                            <br />
                        </div>

                        <div class="chunk">
                            <label for="distance_cycling">Distance Cycling?</label>
                            <br />
                            <input id="distance_cycling"
                                type="number"
                            />
                            <span> mi</span>

                            <br />
                        </div>

                        <div class="chunk">
                            <label for="distance_swimming">Distance Cycling?</label>
                            <br />
                            <input id="distance_swimming"
                                type="number"
                            />
                            <span> mi</span>

                            <br />
                        </div>
                    </div>
                </div>
            
            </div>
        </div>
    );

};

export default AddItem;