import{
  RECEIVE_CONTACT_ERRORS,
  RECEIVE_CONTACT
} from "../actions/contact_actions";

const _nullErrors = [];

const ContactsErrorsReducer = (state = _nullErrors, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CONTACT_ERRORS:
      return action.errors;
    case RECEIVE_CONTACT:
      return _nullErrors;
    default:
      return state;
  }
};

export default ContactsErrorsReducer;