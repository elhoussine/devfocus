import { RECEIVE_TWO_ALGOS } from "../actions/algo_actions";

const dailyAlgosReducer = (state = {}, action) => {
  Object.freeze(state);
  const nextState = Object.assign({}, state);

  switch (action.type) {

     case RECEIVE_TWO_ALGOS:
      //  console.log(Array.isArray(nextState)); 
      // if (!Array.isArray(nextState)) {
        const date = new Date();
        let ms = date.getMilliseconds()

        let idx = 0;
        const arr = [];
        do {
          idx = Math.floor(Math.random() * 100) + 1;
          if (idx <= 76 && !arr.includes(idx)) {
            arr.push(action.algos[idx]) 
          } 
        } while (arr.length < 2)

        // setTimeout(() => {

        // })

        return arr
      // } else {
      //   return nextState;
      // }
        
    default:
      return state;
  }
}
// if daily algos is empty
// return two random algos 
// make a set timeout for the amount of time until the next day starts
// when set timeout runs generate two more algos
// if daily algos is not empty don't do anything

export default dailyAlgosReducer;