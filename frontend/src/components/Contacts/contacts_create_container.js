import { connect } from "react-redux";
import ContactsCreate from "./ContactsCreate";
import { closeModal } from "../../actions/modal_actions";
import { createContact } from "../../actions/contact_actions";

const mapStateToProps = (state) => {
  return {
    user: state.session.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    closeModal: () => dispatch(closeModal()),
    createContact: (contact) => dispatch(createContact(contact)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactsCreate); //fix nulls later
