import * as APIUtil from '../util/job_api_util'
import { receiveErrors } from './session_actions';

export const RECEIVE_JOBS = "RECEIVE_JOBS";
export const RECEIVE_JOB = "RECEIVE_JOB";
export const REMOVE_JOB = "REMOVE_JOB";
export const RECEIVE_JOB_ERRORS = "RECEIVE_JOB_ERRORS";

const receiveJobs = jobs => {
  return {
    type: RECEIVE_JOBS,
    jobs: jobs
  };
};

const receiveJob = job => {
  return {
    type: RECEIVE_JOB,
    job: job
  };
};

const removeJob = jobId => {
  return {
    type: REMOVE_JOB,
    jobId: jobId
  };
};

export const receiveJobErrors = (errors) => ({
  type: RECEIVE_JOB_ERRORS,
  errors,
});

//TODO: add error handling

export const getJobs = () => dispatch => {
  return APIUtil.getJobs()
    .then(jobs => dispatch(receiveJobs(jobs)))
}

export const getJob = jobId => dispatch => {
  return APIUtil.getJob(jobId)
    .then(job => dispatch(receiveJob(job)))
}

export const createJob = job => dispatch => {
  return APIUtil.createJob(job)
    .then(job => dispatch(receiveJob(job)))
    .catch((err) => {
      dispatch(receiveJobErrors(err.response.data))
    })
}

export const updateJob = job => dispatch => {
  return APIUtil.updateJob(job)
    .then(job => dispatch(receiveJob(job)))
    .catch((err) => {
      dispatch(receiveJobErrors(err.response.data))
    })
}

export const deleteJob = jobId => dispatch => {
  return APIUtil.deleteJob(jobId)
    .then(() => dispatch(removeJob(jobId)))
}

