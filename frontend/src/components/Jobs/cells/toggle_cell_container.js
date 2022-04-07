import { connect } from "react-redux";
import ToggleCell from "./ToggleCell";
import { updateJob } from "../../../actions/job_actions";

const mapStateToProps = state => {
  return {

  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateJob: job => dispatch(updateJob(job))
  }
}

export default connect(null, mapDispatchToProps)(ToggleCell)