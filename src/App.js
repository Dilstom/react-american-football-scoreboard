//TODO: STEP 1 - Import the useState hook.
import React, { useState } from 'react';
import './App.css';
import BottomRow from './BottomRow';

function App() {
 //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
 const [valueL, setLion] = useState(0);
 const [valueT, setTiger] = useState(0);
 const [homeName, setHomeName] = useState('Lions');
 const [awayName, setAwayName] = useState('Tigers');
 console.log(homeName);

 const handleTouchdownHome = () => {
  setLion(valueL + 7);
 };

 const handleFieldGoalHome = () => {
  setLion(valueL + 3);
 };
 const handleTouchdownAway = () => {
  setTiger(valueT + 7);
 };

 const handleFieldGoalAway = () => {
  setTiger(valueT + 3);
 };

 return (
  <div className="container">
   <section className="scoreboard">
    <div className="topRow">
     <div className="home">
      <h2 className="home__name">{homeName}</h2>

      {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

      <div className="home__score">{valueL}</div>
     </div>
     <div className="timer">00:03</div>
     <div className="away">
      <h2 className="away__name">{awayName}</h2>
      <div className="away__score">{valueT}</div>
     </div>
    </div>
    <BottomRow />
   </section>
   <section className="buttons">
    <div className="homeButtons">
     {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
     <button className="homeButtons__touchdown" onClick={handleTouchdownHome}>
      {/* <button className="homeButtons__touchdown"> */}
      Home Touchdown
     </button>
     <button className="homeButtons__fieldGoal" onClick={handleFieldGoalHome}>
      {/* <button className="homeButtons__fieldGoal"> */}
      Home Field Goal
     </button>
    </div>
    <div className="awayButtons">
     <button className="awayButtons__touchdown" onClick={handleTouchdownAway}>
      Away Touchdown
     </button>
     <button className="awayButtons__fieldGoal" onClick={handleFieldGoalAway}>
      Away Field Goal
     </button>
    </div>
   </section>
  </div>
 );
}

export default App;
