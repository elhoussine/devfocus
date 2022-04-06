import {
  RECEIVE_JOB_ERRORS,
  RECEIVE_JOB
} from  "../actions/job_actions"

const _nullErrors = [];

const JobsErrorsReducer = (state = _nullErrors, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_JOB_ERRORS:
      return action.errors;
    case RECEIVE_JOB:
      return _nullErrors;
    default:
      return state;
  }
};

export default JobsErrorsReducer;