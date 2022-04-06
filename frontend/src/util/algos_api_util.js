import axios from 'axios';

export const fetchAllAlgos = () => {
  return axios.get(`/api/algos`)
}

export const fetchAlgo = (algoId) => {
  return axios.get(`/api/algos/${algoId}`) 
}

export const fetchUserAlgo = (algoId) => {
  return axios.get(`/api/user-algos`) //${algoId}
}