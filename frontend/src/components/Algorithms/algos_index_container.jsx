import React from "react";
import { connect } from "react-redux";
import AlgosIndex from "./algos_index";
import { fetchAllAlgos, fetchUserAlgos } from "../../actions/algo_actions";

const mSTP = (state) => {

  return {
    userAlgosArr: Object.values(state.entities.userAlgos)
  }
}

const mDTP = (dispatch) => ({
  fetchAllAlgos: () => dispatch(fetchAllAlgos()),
  fetchUserAlgos: () => dispatch(fetchUserAlgos())
})

export default connect(mSTP, mDTP)(AlgosIndex)