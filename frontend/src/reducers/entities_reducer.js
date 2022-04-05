import { combineReducers } from "redux";
import jobs from "./jobs_reducer";
import algos from "./algos_reducer";

const EntitiesReducer = combineReducers({
  jobs,
  algos
})

export default EntitiesReducer