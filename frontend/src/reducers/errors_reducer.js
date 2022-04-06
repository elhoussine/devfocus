import { combineReducers } from "redux";

import SessionErrorsReducer from "./session_errors_reducer";
import JobsErrorsReducer from "./jobs_errors_reducer";
import ContactsErrorsReducer from "./contacts_errors_reducer";

export default combineReducers({
  session: SessionErrorsReducer,
  jobs: JobsErrorsReducer,
  contacts: ContactsErrorsReducer,
});
