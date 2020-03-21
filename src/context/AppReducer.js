export default (state, action) => {
  let sleepEntries;
  switch (action.type) {
    case 'UPDATE_SLEEPHOURSGOAL':
      localStorage.setItem('sleepHoursGoal', action.payload);
      return {
        ...state,
        sleepHoursGoal: action.payload
      };
    case 'DELETE_SLEEPENTRY':
      sleepEntries = state.sleepEntries.filter((e) => e.id !== action.payload);
      localStorage.setItem('sleepEntries', JSON.stringify(sleepEntries));
      return {
        ...state,
        sleepEntries
      };
    case 'ADD_SLEEPENTRY':
      sleepEntries = [ action.payload, ...state.sleepEntries ];
      localStorage.setItem('sleepEntries', JSON.stringify(sleepEntries));
      return {
        ...state,
        sleepEntries
      };
    default:
      return state;
  }
};
