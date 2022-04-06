import React from "react";
import { connect } from "react-redux";
import AlgosIndex from "./algos_index";
import { fetchAllAlgos } from "../../actions/algo_actions";

const mSTP = (state) => {

  return {
    
  }
}

const mDTP = (dispatch) => ({
  fetchAllAlgos: () => dispatch(fetchAllAlgos())
})

export default connect(mSTP, mDTP)(AlgosIndex)