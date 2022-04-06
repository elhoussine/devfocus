import { RECEIVE_ALL_ALGOS, RECEIVE_ALGO, RECEIVE_USER_ALGO } from "../actions/algo_actions";

const AlgosReducer = (state = {}, action) => {
  Object.freeze(state);
  const nextState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_ALL_ALGOS:
      // nextState = action.algos;
      return action.algos;

    case RECEIVE_ALGO:
      return action.algo;

    case RECEIVE_USER_ALGO:
      return action.userAlgo;
    default:
      return state;
  }
}

export default AlgosReducer;