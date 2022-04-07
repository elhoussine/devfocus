import React from "react";
import { connect } from "react-redux";
import AlgosIndex from "./algos_index";
import { fetchAllAlgos, fetchUserAlgos, receiveTwoAlgos } from "../../actions/algo_actions";

const mSTP = (state) => {

  return {
    userAlgosArr: Object.values(state.entities.userAlgos),
    dailyAlgos: state.entities.dailyAlgos
  }
}

const mDTP = (dispatch) => ({
  fetchAllAlgos: () => dispatch(fetchAllAlgos()),
  fetchUserAlgos: () => dispatch(fetchUserAlgos()),
  receiveTwoAlgos: (algos) => dispatch(receiveTwoAlgos(algos))
})

export default connect(mSTP, mDTP)(AlgosIndex)