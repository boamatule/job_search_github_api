const jobsReducer = ( state = [],
  actions) => {
    switch (actions.type) {
      case 'SET_JOBS':
        return actions.job;
      case 'LOAD_MORE_JOBS':
        return [...state,
        ...actions.jobs];
        default:
        return state;
    }
  };

export default jobsReducer;