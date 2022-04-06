import axios from "axios";

//TODO: check routes after backend is finished

export const getContacts = () => {
  return axios.get(`/api/contacts`);
};

export const getContact = (contactId) => {
  return axios.get(`/api/contacts/${contactId}`);
};

export const createContact = (contact) => {
  return axios.post(`/api/contacts/new`, contact);
};

export const updateContact = (contact) => {
  return axios.patch(`/api/contacts/${contact.id}`, contact);
};

export const deleteContact = (contactId) => {
  return axios.delete(`/api/contacts/${contactId}`);
};
