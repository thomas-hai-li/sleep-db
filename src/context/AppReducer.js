export default (state, action) => {
  switch (action.type) {
    case 'UPDATE_SLEEPHOURSGOAL':
      return {
        ...state,
        sleepHoursGoal: action.payload
      };
    case 'DELETE_SLEEPENTRY':
      return {
        ...state,
        sleepEntries: state.sleepEntries.filter((e) => e.id !== action.payload)
      };
    case 'ADD_SLEEPENTRY':
      return {
        ...state,
        sleepEntries: [ action.payload, ...state.sleepEntries ]
      };
    default:
      return state;
  }
};
