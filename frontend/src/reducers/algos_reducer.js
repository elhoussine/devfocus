import { RECEIVE_ALL_ALGOS, RECEIVE_ALGO, RECEIVE_USER_ALGO, NEW_USER_ALGO, RECEIVE_ALL_USER_ALGOS } from "../actions/algo_actions";

const AlgosReducer = (state = {}, action) => {
  Object.freeze(state);
  const nextState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_ALL_ALGOS:
      // nextState = action.algos;
      return action.algos;

    case RECEIVE_ALGO:
      return action.algo;

    // case RECEIVE_USER_ALGO:
    //   return action.userAlgo;

    // case RECEIVE_ALL_USER_ALGOS:
    //   return action.userAlgos;

    // case NEW_USER_ALGO:
    //   return action.userAlgo;

    default:
      return state;
  }
}

export default AlgosReducer;