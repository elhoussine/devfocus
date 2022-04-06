import * as AlgosApiUtil from "../util/algos_api_util";
export const RECEIVE_ALL_ALGOS = 'RECEIVE_ALL_ALGOS';
export const RECEIVE_ALGO = 'RECEIVE_ALGO';
export const RECEIVE_USER_ALGO = 'RECEIVE_USER_ALGO';

const receiveAllAlgos = (algos) => ({
  type: RECEIVE_ALL_ALGOS,
  algos
})

const receiveAlgo = (algo) => ({
  type: RECEIVE_ALGO,
  algo
})

const receiveUserAlgo = (userAlgo) => ({
  type: RECEIVE_USER_ALGO,
  userAlgo
})

export const fetchAllAlgos = () => dispatch => {
  return AlgosApiUtil.fetchAllAlgos()
    .then(algos => dispatch(receiveAllAlgos(algos)))
}

export const fetchAlgo = (algoId) => dispatch => {
  return AlgosApiUtil.fetchAlgo(algoId)
    .then(algo => dispatch(receiveAlgo(algo)))
}

export const fetchUserAlgo = (algoId) => dispatch => {
  return AlgosApiUtil.fetchUserAlgo(algoId)
    .then(userAlgo => dispatch(receiveUserAlgo(userAlgo)))
}