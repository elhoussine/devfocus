import React from "react";
import { connect } from "react-redux";
import AllAlgos from "./all_algos";
import { openModal, closeModal } from '../../actions/modal_actions';

const mSTP = (state) => {

  return {
    
  }
}

const mDTP = (dispatch) => ({
  openModal: (modal) => dispatch(openModal(modal))
})

export default connect(mSTP, mDTP)(AllAlgos)