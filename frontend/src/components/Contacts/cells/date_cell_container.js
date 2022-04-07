import { connect } from "react-redux";
import DateCell from './DateCell';
import { updateContact } from "../../../actions/contact_actions"

const mapStateToProps = state => {
  return {

  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateContact: contact => dispatch(updateContact(contact))
  }
}

export default connect(null, mapDispatchToProps)(DateCell);