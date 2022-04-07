import React from "react";
import AllAlgosContainer from "./all_algos_container";
import ProgressBar from "./progress_bar";

class AlgosIndex extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      clock: null,
      algos: []
    }

    this.setAlgos = this.setAlgos.bind(this);
    this.randomTwo = this.randomTwo.bind(this);
  }
  
  clockIntervalID = 0; //used for clearing the clock interval

  componentDidMount() {
      const date = new Date();
      this.setState({clock: date.toLocaleDateString()})
      // console.log(this.props);
      this.props.fetchAllAlgos()
        .then(resp => this.setAlgos(resp.algos.data))
  }

  setAlgos(algos) {
    this.setState({algos: algos})
  }
  
  randomTwo() {
    let idx = 0
    const arr = [];
    do {
      idx = Math.floor(Math.random() * 100) + 1;
      if (idx <= 76) arr.push(idx)
    } while (arr.length < 2);//make them unique somehow
    console.log(arr);
  }

  render() {
    const {clock, algos} = this.state
    console.log(algos);
    if (!clock || !algos) return null;
   return (
     <div>
       <p onClick={this.randomTwo}>two algos</p>
       <p>{clock}</p>
       <ProgressBar fetchUserAlgos={this.props.fetchUserAlgos}/>
       <AllAlgosContainer algos={algos}/>
     </div>
   ) 
  }
}

export default AlgosIndex;
