import { connect } from 'react-redux';
import { getJobs } from '../../actions/job_actions';
import JobsIndex from './JobsIndex';
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = state => {
  return {
    jobs: Object.values(state.jobs)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getJobs: () => dispatch(getJobs()),
    openModal: (modal) => dispatch(openModal(modal))
  };
};

//TODO change

// export default connect(mapStateToProps, mapDispatchToProps)(JobsIndex);
export default connect(null, mapDispatchToProps)(JobsIndex);