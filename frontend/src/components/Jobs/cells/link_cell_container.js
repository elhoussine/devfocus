import { connect } from "react-redux";
import LinkCell from "./LinkCell";
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

export default connect(null, mapDispatchToProps)(LinkCell)