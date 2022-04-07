import {
  RECEIVE_CONTACTS,
  RECEIVE_CONTACT,
  REMOVE_CONTACT
} from "../actions/contact_actions";

const ContactsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case RECEIVE_CONTACTS:
      newState = {};
      action.contacts.data.map(contact => {
        newState[contact._id] = contact
      })
      return newState;
    case RECEIVE_CONTACT:
      newState = Object.assign({}, state);
      newState[action.contact.data._id] = action.contact.data;
      return newState;
    case REMOVE_CONTACT:
      newState = Object.assign({}, state);
      delete newState[action.contactId];
      return newState;
    default:
      return state;
  }
}

export default ContactsReducer;