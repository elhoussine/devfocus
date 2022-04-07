import { connect } from "react-redux";
import ContactShow from "./ContactShow";
import { openContactModal } from "../../actions/modal_actions";

const mapStateToProps = state => {
  return {
    contacts: state.entities.contacts
  }
};

const mapDispatchToProps = dispatch => {
  return {
    openContactModal: (modal, contactId) => dispatch(openContactModal(modal, contactId))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactShow)