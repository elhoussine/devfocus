import React from "react";
import AllAlgos from "./all_algos";

class AlgosIndex extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      clock: null
    }

    this.randomTwo = this.randomTwo.bind(this);
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

  randomTwo() {
    let idx = 0
    const arr = [];
    do {
      idx = Math.floor(Math.random() * 100) + 1;
      if (idx <= 11) arr.push(idx)
    } while (arr.length < 2);
    console.log(arr);
  }

  render() {
    const {clock} = this.state
    if (!clock) return null;
   return (
     <div>
       <p onClick={this.randomTwo}>two algos</p>
       <p>{clock}</p>
       <AllAlgos />
     </div>
   ) 
  }
}

export default AlgosIndex;
