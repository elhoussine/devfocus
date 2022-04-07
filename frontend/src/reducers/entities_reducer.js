import { combineReducers } from "redux";
import jobs from "./jobs_reducer";
import algos from "./algos_reducer";
import userAlgos from "./user_algos_reducer";

const EntitiesReducer = combineReducers({
  jobs,
  algos,
  userAlgos
})

export default EntitiesReducer