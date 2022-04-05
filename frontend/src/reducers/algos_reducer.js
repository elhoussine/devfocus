import { RECEIVE_ALL_ALGOS } from "../actions/algo_actions";

const AlgosReducer = (state = {}, action) => {
  Object.freeze(state);
  const nextState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_ALL_ALGOS:
      nextState = action.algos;
      //Alex: can also just return action.algos as the slice of state
      return nextState;
    default:
      return state
  }
}

export default AlgosReducer