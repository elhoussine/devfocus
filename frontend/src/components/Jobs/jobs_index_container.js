import { connect } from 'react-redux';
import { getJobs } from '../../actions/job_actions';
import JobsIndex from './JobsIndex';

const mapStateToProps = state => {
  return {
    jobs: Object.values(state.jobs.all)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getJobs: () => dispatch(getJobs())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(JobsIndex);