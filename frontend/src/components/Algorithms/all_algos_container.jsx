import React from "react";
import { connect } from "react-redux";
import AllAlgos from "./all_algos";
import { openModal, closeModal } from '../../actions/modal_actions';
import { fetchUserAlgo } from "../../actions/algo_actions";

const mSTP = (state, ownProps) => {
  // console.log(ownProps);
  return {
    algos: ownProps.algos
  }
}

const mDTP = (dispatch) => ({
  openModal: (modal, algoId) => dispatch(openModal(modal, algoId)),
  fetchUserAlgo: (userAlgoId) => dispatch(fetchUserAlgo(userAlgoId))
})

export default connect(mSTP, mDTP)(AllAlgos)