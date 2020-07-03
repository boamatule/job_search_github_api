const jobsReducer = ( state = [],
  actions) => {
    switch (actions.type) {
      case 'SET_JOBS':
        return action.job;
      case 'LOAD_MORE_JOBS':
        return [...state,
        ...action.jobs];
        default:
          return state;
    }
  };

export default jobsReducer;