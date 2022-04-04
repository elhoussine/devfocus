import { RECEIVE_ALL_ALGOS } from "../actions/algo_actions";

const AlgosReducer = (state = {}, action) => {
  Object.freeze(state);
  const nextState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_ALL_ALGOS:
      nextState.entities.algos = action.algos;
      return nextState;
  
    default:
      break;
  }
}