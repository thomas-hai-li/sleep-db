import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const SleepEntry = ({ sleepEntry }) => {
  const { sleepHoursGoal, deleteSleepEntry } = useContext(GlobalContext);
  const { id, date, startTime, endTime, notes, durationHHMM, durationHours } = sleepEntry;

  return (
    <li className={durationHours < sleepHoursGoal ? 'minus' : 'plus'}>
      {date.toDateString()} <span>{durationHHMM}</span>
      <button className="delete-btn" onClick={() => deleteSleepEntry(id)}>
        x
      </button>
    </li>
  );
};
