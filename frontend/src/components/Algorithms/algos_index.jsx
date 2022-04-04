import React from "react";
import AllAlgos from "./all_algos";

class AlgosIndex extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      clock: null
    }
  }
  
  clockIntervalID = 0; //used for clearing the clock interval

  componentDidMount() {
   this.clockIntervalID = setInterval(() => {
      const date = new Date();
      this.setState({clock: date.toLocaleTimeString()})

    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.clockIntervalID);
  }

  render() {
    const {clock} = this.state
    if (!clock) return null;
   return (
     <div>
       <p>two algos</p>
       <p>{clock}</p>
       <AllAlgos />
     </div>
   ) 
  }
}

export default AlgosIndex;
