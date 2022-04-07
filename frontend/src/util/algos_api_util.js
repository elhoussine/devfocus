import axios from 'axios';

export const fetchAllAlgos = () => {
  return axios.get(`/api/algos`)
}

export const fetchAlgo = (algoId) => {
  return axios.get(`/api/algos/${algoId}`) 
}

export const fetchUserAlgo = (algoId) => {
  return axios.get(`/api/user-algos/${algoId}`) 
}

export const fetchUserAlgos = () => {
  return axios.get(`/api/user-algos`) 
}

export const createUserAlgo = userAlgo => {
  return axios.post(`/api/user-algos/new`, userAlgo) 
}

export const deleteUserAlgo = userAlgoId => {
  return axios.delete(`/api/user-algos/${userAlgoId}`) 
}

