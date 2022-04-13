import React from "react";
import { connect } from "react-redux";
import AllAlgos from "./all_algos";
import { openModal, closeModal } from '../../actions/modal_actions';
import { fetchUserAlgo, createUserAlgo, fetchUserAlgos, fetchAlgo, deleteUserAlgo } from "../../actions/algo_actions";

const mSTP = (state, ownProps) => {
  // console.log(ownProps);
  return {
    algos: ownProps.algos,
    currentUserId: state.session.user.id,
    userAlgos: Object.values(state.entities.userAlgos)
  }
}

const mDTP = (dispatch) => ({
  openModal: (modal, algoId) => dispatch(openModal(modal, algoId)),
  fetchAlgo: (algoId) => dispatch(fetchAlgo(algoId)),
  fetchUserAlgo: (userAlgoId) => dispatch(fetchUserAlgo(userAlgoId)),
  fetchUserAlgos: () => dispatch(fetchUserAlgos()),
  createUserAlgo: (userAlgo) => dispatch(createUserAlgo(userAlgo)),
  deleteUserAlgo: (userAlgoId) => dispatch(deleteUserAlgo(userAlgoId))
})

export default connect(mSTP, mDTP)(AllAlgos)