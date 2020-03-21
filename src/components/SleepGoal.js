import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const SleepGoal = () => {
  const { sleepHoursGoal, updateSleepHoursGoal } = useContext(GlobalContext);

  function onGoalChange(newNum) {
    const digitPressed = +newNum[newNum.length - 1];

    // within normal range
    if (digitPressed <= 9 && digitPressed >= 1 && !isNaN(digitPressed)) {
      updateSleepHoursGoal(digitPressed);
    }
    else {
      updateSleepHoursGoal(sleepHoursGoal)
    }
  }

  return (
    <div className="sleep-goal">
      <h4>
        My Goal <span className="hint">(click to edit)</span>
      </h4>
      <input type="number" className='inputHoursGoal' value={sleepHoursGoal} onChange={(e) => onGoalChange(e.target.value)} />
      <h1>
        hours<span className="hint"> per night</span>
      </h1>
    </div>
  );
};
