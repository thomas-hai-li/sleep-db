import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// initial state
const initialState = {
  sleepHoursGoal: 8,
  sleepEntries: []
};

// create context
export const GlobalContext = createContext(initialState);

// provider component
export const GlobalProvider = ({ children }) => {
  const [ state, dispatch ] = useReducer(AppReducer, initialState);

  // actions
  function updateSleepHoursGoal(numHour) {
    dispatch({
      type: 'UPDATE_SLEEPHOURSGOAL',
      payload: numHour
    });
  }

  function deleteSleepEntry(id) {
    dispatch({
      type: 'DELETE_SLEEPENTRY',
      payload: id
    });
  }

  function addSleepEntry(sleepEntry) {
    dispatch({
      type: 'ADD_SLEEPENTRY',
      payload: sleepEntry
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        sleepHoursGoal: state.sleepHoursGoal,
        sleepEntries: state.sleepEntries,
        updateSleepHoursGoal,
        deleteSleepEntry,
        addSleepEntry
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
