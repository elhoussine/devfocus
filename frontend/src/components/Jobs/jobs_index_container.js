import { connect } from 'react-redux';
import { getJobs, deleteJob } from '../../actions/job_actions';
import JobsIndex from './JobsIndex';
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = state => {

  return {
    jobs: Object.values(state.entities.jobs)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getJobs: () => dispatch(getJobs()),
    openModal: (modal) => dispatch(openModal(modal)),
    deleteJob: (jobId) => dispatch(deleteJob(jobId))
  };
};

//TODO change

// export default connect(mapStateToProps, mapDispatchToProps)(JobsIndex);
export default connect(mapStateToProps, mapDispatchToProps)(JobsIndex);