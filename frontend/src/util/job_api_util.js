import axios from 'axios';

//TODO: check routes after backend is finished

export const getJobs = () => {
  return axios.get(`/api/jobs`)
};

export const getJob = jobId => {
  return axios.get(`/api/jobs/${jobId}`)
}

export const createJob = job => {
  return axios.post(`/api/jobs/`, job)
}

export const updateJob = job => {
  return axios.patch(`/api/jobs/${job.id}`, job)
}

export const deleteJob = jobId => {
  return axios.delete(`/api/jobs/${jobId}`)
}