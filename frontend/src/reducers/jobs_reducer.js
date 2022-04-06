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
      newState = {};
      action.jobs.data.map(job => {
        newState[job._id] = job
      })
      return newState
    case RECEIVE_JOB:
      newState = Object.assign({}, state);
      newState[action.job.data._id] = action.job.data;
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