import { connect } from "react-redux";
import { getContacts } from "../../actions/contact_actions";
import ContactsIndex from "./ContactsIndex";
import { openModal, closeModal } from "../../actions/modal_actions";
import { deleteContact } from "../../actions/contact_actions";

const mapStateToProps = (state) => {
  return {
    contacts: Object.values(state.entities.contacts),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getContacts: () => dispatch(getContacts()),
    openModal: (modal) => dispatch(openModal(modal)),
    deleteContact: (contactId) => dispatch(deleteContact(contactId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactsIndex);
