import React from "react";
import { connect } from "react-redux";
import { fetchAlgo } from "../../actions/algo_actions";
import AlgoShow from "./algo_show";

const mSTP = (state, ownProps) => {
  console.log(ownProps);
  return {
    
  }
}

const mDTP = (dispatch) => ({
  fetchAlgo: (algoId) => dispatch(fetchAlgo(algoId))
})

export default connect(mSTP, mDTP)(AlgoShow)