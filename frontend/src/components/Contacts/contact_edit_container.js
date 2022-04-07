import { connect } from "react-redux";
import ContactEdit from "./ContactEdit";
import { updateContact } from "../../actions/contact_actions";
import { closeModal } from "../../actions/modal_actions";

const mapStateToProps = state => {
  return {
    contacts: state.entities.contacts,
    user: state.session.user
  }
};

const mapDispatchToProps = dispatch => {
  return {
    updateContact: contact => dispatch(updateContact(contact)),
    closeModal: () => dispatch(closeModal())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactEdit)