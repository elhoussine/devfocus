import * as APIUtil from "../util/contacts_api_util";
import { receiveErrors } from "./session_actions";

export const RECEIVE_CONTACTS = "RECEIVE_CONTACTS";
export const RECEIVE_CONTACT = "RECEIVE_CONTACT";
export const REMOVE_CONTACT = "REMOVE_CONTACT";
export const RECEIVE_CONTACT_ERRORS = "RECEIVE_CONTACT_ERRORS";

const receiveContacts = contacts => {
  return{
    type: RECEIVE_CONTACTS,
    contacts
  }
}

const receiveContact = contact => {
  return {
    type: RECEIVE_CONTACT,
    contact
  }
}

const removeContact = contactId => {
  return{
    type: REMOVE_CONTACT,
    contactId
  }
}

const receiveContactErrors = errors => {
  return{
    type: RECEIVE_CONTACT_ERRORS,
    errors
  }
}

//thunk actions

export const getContacts = () => dispatch => {
  return APIUtil.getContacts().then(contacts => dispatch(receiveContacts(contacts)))
}

export const getContact = contactId => dispatch => {
  return APIUtil.getContact(contactId).then(contact => dispatch(receiveContact(contact)))
}

export const createContact = contact => dispatch => {

  return APIUtil.createContact(contact)
    .then((contact) => dispatch(receiveContact(contact)))
    .catch((err) => {
      dispatch(receiveContactErrors(err.response.data));
    });
}

export const updateContact = contact => dispatch => {
  return APIUtil.updateContact(contact).then(contact => dispatch(receiveContact(contact)))
}

export const deleteContact = contactId => dispatch => {
  return APIUtil.deleteContact(contactId).then(() => dispatch(removeContact(contactId)))
}

