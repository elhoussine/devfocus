import { RECEIVE_USER_ALGO, NEW_USER_ALGO, RECEIVE_ALL_USER_ALGOS, REMOVE_USER_ALGO } from "../actions/algo_actions";

const UserAlgosReducer = (state = {}, action) => {
  Object.freeze(state);
  const nextState = Object.assign({}, state);
  let newState

  switch (action.type) {
    case RECEIVE_USER_ALGO:
      return action.userAlgo;

    case RECEIVE_ALL_USER_ALGOS:
      newState = {};
      action.userAlgos.data.map(algo => {
        newState[algo._id] = algo
      })
      return newState

    case NEW_USER_ALGO:
      nextState[action.userAlgo.data._id] = action.userAlgo.data
      return nextState;

    case REMOVE_USER_ALGO:
      console.log(nextState);
      delete nextState[action.userAlgoId]
      return nextState;

    default:
      return state;
  }
}

export default UserAlgosReducer;