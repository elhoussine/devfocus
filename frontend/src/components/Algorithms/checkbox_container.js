import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Checkbox from "./Checkbox";


import {
  fetchUserAlgo,
  createUserAlgo,
  fetchUserAlgos,
  fetchAlgo,
  deleteUserAlgo,
} from "../../actions/algo_actions";


const mSTP = (state, ownProps) => {
  return {
    currentUserId: state.session.user.id,
    userAlgos: Object.values(state.entities.userAlgos),
  };
}

const mDTP = (dispatch) => ({
  fetchAlgo: (algoId) => dispatch(fetchAlgo(algoId)),
  fetchUserAlgo: (userAlgoId) => dispatch(fetchUserAlgo(userAlgoId)),
  fetchUserAlgos: () => dispatch(fetchUserAlgos()),
  createUserAlgo: (userAlgo) => dispatch(createUserAlgo(userAlgo)),
  deleteUserAlgo: (userAlgoId) => dispatch(deleteUserAlgo(userAlgoId)),
});

export default withRouter(connect(mSTP, mDTP)(Checkbox));