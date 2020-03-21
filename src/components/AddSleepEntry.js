import React, { useState, useEffect, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { millisecToHHMM } from '../utils/Time';

export const AddSleepEntry = () => {
  const [ date, setDate ] = useState(null);
  const [ startTime, setStartTime ] = useState(null);
  const [ endTime, setEndTime ] = useState(null);
  const [ notes, setNotes ] = useState('');

  const { addSleepEntry } = useContext(GlobalContext);

  const timezone = new Date().toLocaleTimeString('en-us', { timeZoneName: 'short' }).split(' ')[2];
  const today = new Date().toDateString();

  const onSubmit = (e) => {
    e.preventDefault();
    if (!date || !startTime || !endTime) {
      return;
    }
    const durationMillisec = endTime.getTime() - startTime.getTime();
    if (durationMillisec < 0) {
      alert('Enter a valid time range.');
      return;
    }

    const durationHHMM = millisecToHHMM(durationMillisec);
    const durationHours = durationMillisec / 3.6e6;

    const newSleepEntry = {
      id: Math.floor(Math.random() * 1000000000000),
      dateAdded: new Date(),
      date,
      startTime,
      endTime,
      notes,
      durationHHMM,
      durationHours
    };

    addSleepEntry(newSleepEntry);
  };

  useEffect(
    () => {
      if (date) {
        let currentDate = date.toDateString();
        if (startTime) {
          let time = startTime.toLocaleTimeString();
          let newStartTime = new Date(`${currentDate} ${time} ${timezone}`);
          if (newStartTime.getHours() >= 12) {
            newStartTime.setHours(newStartTime.getHours() - 24); // set the start time date to the day before if time is in PM
          }
          setStartTime(newStartTime);
        }
        if (endTime) {
          let time = endTime.toLocaleTimeString();
          let newEndTime = new Date(`${currentDate} ${time} ${timezone}`);
          setEndTime(newEndTime);
        }
      }
    },
    [ date ]
  );

  return (
    <div>
      <h3>Add new entry</h3>
      <form onSubmit={onSubmit}>
        <label htmlFor="date">Date</label>
        <div className="form-control">
          <input type="date" onChange={(e) => setDate(new Date(e.target.value + ' ' + timezone))} />
        </div>
        <label htmlFor="amount">Start End</label>
        <div className="form-control">
          <input
            type="time"
            onChange={(e) => {
              let newStartTime;
              if (date) {
                newStartTime = new Date(`${date.toDateString()} ${e.target.value} ${timezone}`);
              } else {
                newStartTime = new Date(`${today} ${e.target.value} ${timezone}`);
              }
              if (newStartTime.getHours() >= 12) {
                newStartTime.setHours(newStartTime.getHours() - 24); // set the start time date to the day before if time is in PM
              }
              setStartTime(newStartTime);
            }}
          />
          <input
            type="time"
            onChange={(e) => {
              if (date) {
                setEndTime(new Date(`${date.toDateString()} ${e.target.value} ${timezone}`));
              } else {
                setEndTime(new Date(`${today} ${e.target.value} ${timezone}`));
              }
            }}
          />
        </div>
        <label htmlFor="note">Notes</label>
        <div className="form-control">
          <textarea
            type="text"
            autoComplete="off"
            spellCheck="false"
            autoCorrect="off"
            onChange={(e) => setNotes(e.target.value)}
          />
        </div>
        <button className="btn">Add entry</button>
      </form>
    </div>
  );
};
