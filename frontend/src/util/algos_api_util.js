import axios from 'axios';

export const fetchAllAlgos = () => {
  return axios.get(`/api/algos`) //Alex: might not be correct route
}