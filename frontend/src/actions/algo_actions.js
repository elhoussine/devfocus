import * as AlgosApiUtil from "../util/algos_api_util";
export const RECEIVE_ALL_ALGOS = 'RECEIVE_ALL_ALGOS';
export const RECEIVE_ALGO = 'RECEIVE_ALGO';
export const RECEIVE_USER_ALGO = 'RECEIVE_USER_ALGO';
export const RECEIVE_ALL_USER_ALGOS = 'RECEIVE_ALL_USER_ALGOS';
export const NEW_USER_ALGO = 'NEW_USER_ALGO';
export const REMOVE_USER_ALGO = 'REMOVE_USER_ALGO';
export const RECEIVE_TWO_ALGOS = 'RECEIVE_TWO_ALGOS';

export const receiveTwoAlgos = (algos) => ({
  type: RECEIVE_TWO_ALGOS,
  algos
})

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

const newUserAlgo = (userAlgo) => ({
  type: NEW_USER_ALGO,
  userAlgo
})

const receiveAllUserAlgos = (userAlgos) => ({
  type: RECEIVE_ALL_USER_ALGOS,
  userAlgos
})

const removeUserAlgo = (userAlgoId) => ({
  type: REMOVE_USER_ALGO,
  userAlgoId
})

export const fetchTwoAlgos = (algos) => dispatch => {
  dispatch(receiveTwoAlgos(algos))
}

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

export const fetchUserAlgos = () => dispatch => {
  return AlgosApiUtil.fetchUserAlgos()
    .then(userAlgos => dispatch(receiveAllUserAlgos(userAlgos)))
}

export const createUserAlgo = userAlgo => dispatch => {
  return AlgosApiUtil.createUserAlgo(userAlgo)
    .then(userAlgo => dispatch(newUserAlgo(userAlgo)))
}

export const deleteUserAlgo = userAlgoId => dispatch => {
  return AlgosApiUtil.deleteUserAlgo(userAlgoId)
  .then(userAlgo => {
      dispatch(removeUserAlgo(userAlgo.data._id))
    })
}