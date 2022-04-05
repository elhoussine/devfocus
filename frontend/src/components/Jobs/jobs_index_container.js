import { connect } from 'react-redux';
import { getJobs } from '../../actions/job_actions';
import JobsIndex from './JobsIndex';

const mapStateToProps = state => {
  return {
    jobs: Object.values(state.jobs)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getJobs: () => dispatch(getJobs())
  };
};

//TODO change

// export default connect(mapStateToProps, mapDispatchToProps)(JobsIndex);
export default connect(null, null)(JobsIndex);