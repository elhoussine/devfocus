import { combineReducers } from "redux";
import jobs from "./jobs_reducer";
import algos from "./algos_reducer";
import userAlgos from "./user_algos_reducer";
import contacts from "./contacts_reducer"

const EntitiesReducer = combineReducers({
  jobs,
  algos,
  userAlgos,
  contacts
})

export default EntitiesReducer