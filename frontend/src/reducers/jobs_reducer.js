import {
  RECEIVE_JOBS,
  RECEIVE_JOB,
  REMOVE_JOB
} from '../actions/job_actions'



const JobsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState
  switch (action.type) {
    case RECEIVE_JOBS:
      return action.jobs.data
    case RECEIVE_JOB: //TODO make sure the job is correctly being applied
      newState = Object.assign({}, state);
      newState[action.job.id] = action.job;
      return newState
    case REMOVE_JOB:
      newState = Object.assign({}, state);
      delete newState[action.jobId]
      return newState
    default:
      return state
  }
}

export default JobsReducer