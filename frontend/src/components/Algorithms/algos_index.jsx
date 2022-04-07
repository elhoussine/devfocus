import React from "react";
import AllAlgosContainer from "./all_algos_container";
import ProgressBar from "./progress_bar";

class AlgosIndex extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      clock: null,
      algos: [],
      twoAlgos: []
    }

    this.setAlgos = this.setAlgos.bind(this);
    // this.randomTwo = this.randomTwo.bind(this);
  }

  clockIntervalID = 0; //used for clearing the clock interval

  componentDidMount() {
    const date = new Date();
    this.setState({ clock: date.toLocaleDateString() })
    // console.log(this.props);
    this.props.fetchAllAlgos()
    .then(resp => {
      console.log(resp.algos.data);
      this.setAlgos(resp.algos.data)
      this.props.receiveTwoAlgos(resp.algos.data)
    })
    // this.props.receiveTwoAlgos()
  }

  setAlgos(algos) {
    this.setState({ algos: algos })
  }

  render() {
    const { clock, algos, twoAlgos } = this.state;
    const { dailyAlgos } = this.props;
    if (Object.keys(dailyAlgos).length === 0) return null;
    // console.log(dailyAlgos);
    if (!clock || !algos || !twoAlgos || !dailyAlgos ) return null;
   return (
     <div>
      <p >Featured Algorithms</p>
       <div className="two-algs-cont">
        {
          dailyAlgos.map(algo => {
            // console.log(algo);
            return (
              <div>
                {/* placeholder */}
               { algo.name }
               <a href={algo.link}>{algo.link}</a>
              </div>
            )
          })
        }
       </div>
       <p>{clock}</p>
       <ProgressBar userAlgosArr={this.props.userAlgosArr}/>
       <AllAlgosContainer algos={algos}/>
     </div>
   ) 
  }
}

export default AlgosIndex;
