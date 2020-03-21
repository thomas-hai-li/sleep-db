import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { millisecToHHMM } from '../utils/Time';

export const RestedDeficit = () => {
  const { sleepHoursGoal, sleepEntries } = useContext(GlobalContext);

  const numRestedDays = sleepEntries.reduce((num, entry) => {
    if (entry.durationHours >= sleepHoursGoal) {
      num += 1;
    }
    return num;
  }, 0);

  // Calculate average deficit in HH:MM format

  let averageDeficitHHMM;
  const deficitEntries = sleepEntries.filter((entry) => entry.durationHours < sleepHoursGoal);

  if (deficitEntries.length !== 0) {
    const sumDeficitHours = deficitEntries.reduce((num, entry) => {
      return num + (sleepHoursGoal - entry.durationHours);
    }, 0);
    const averageDeficitMillisec = sumDeficitHours * 3.6e6 / deficitEntries.length;
    averageDeficitHHMM = millisecToHHMM(averageDeficitMillisec);
  } else {
    averageDeficitHHMM = '0:00';
  }

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Rested Nights</h4>
        <p className="stats plus">{numRestedDays}</p>
      </div>
      <div>
        <h4>AVG Deficit</h4>
        <p className="stats minus">{averageDeficitHHMM || '0:00'}</p>
      </div>
    </div>
  );
};
