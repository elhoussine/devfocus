import { RECEIVE_ALL_ALGOS, RECEIVE_ALGO } from "../actions/algo_actions";

const AlgosReducer = (state = {}, action) => {
  Object.freeze(state);
  const nextState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_ALL_ALGOS:
      return action.algos;

    case RECEIVE_ALGO:
      return action.algo;

    default:
      return state;
  }
}

export default AlgosReducer;