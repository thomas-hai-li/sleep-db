import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const SleepEntry = ({ sleepEntry }) => {
  const { sleepHoursGoal, deleteSleepEntry } = useContext(GlobalContext);
  const { id, date, startTime, endTime, notes, durationHHMM, durationHours } = sleepEntry;

  const startTimeHHMM = startTime.toLocaleTimeString().substring(0, 5);
  const endTimeHHMM = endTime.toLocaleTimeString().substring(0, 5);

  return (
    <li className={durationHours < sleepHoursGoal ? 'minus' : 'plus'}>
      {date.toDateString()}{' '}
      <span className="timeRange">
        ({startTimeHHMM}→{endTimeHHMM})
      </span>{' '}
      <span>{durationHHMM}</span>
      <button className="delete-btn" onClick={() => deleteSleepEntry(id)}>
        x
      </button>
    </li>
  );
};
