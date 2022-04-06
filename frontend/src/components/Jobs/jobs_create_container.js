import { connect } from "react-redux";
import JobsCreate from './JobsCreate';
import { closeModal } from '../../actions/modal_actions'
import { createJob } from "../../actions/job_actions";

const mapStateToProps = state => {
  return {
    user: state.session.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal()),
    createJob: job => dispatch(createJob(job))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(JobsCreate) //fix nulls later