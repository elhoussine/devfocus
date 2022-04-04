import * as AlgosApiUtil from "../util/algos_api_util";
export const RECEIVE_ALL_ALGOS = 'RECEIVE_ALL_ALGOS';

const receiveAllAlgos = (algos) => ({
  type: RECEIVE_ALL_ALGOS,
  algos
})

export const fetchAllAlgos = () => dispatch => {
  AlgosApiUtil.fetchAllAlgos()
    .then(algos => dispatch(receiveAllAlgos(algos)))
}