import React from "react";
import AllAlgosContainer from "./all_algos_container";
import ProgressBar from "./progress_bar";
import "./algos_index.css";

class AlgosIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      clock: null,
      algos: [],
      twoAlgos: [],
    };

    this.setAlgos = this.setAlgos.bind(this);
    // this.randomTwo = this.randomTwo.bind(this);
  }

  clockIntervalID = 0; //used for clearing the clock interval

  componentDidMount() {
    const date = new Date();
    this.setState({ clock: date.toLocaleDateString() });
    // console.log(this.props);
    this.props.fetchAllAlgos().then((resp) => {
      console.log(resp.algos.data);
      this.setAlgos(resp.algos.data);
      this.props.receiveTwoAlgos(resp.algos.data);
    });
    // this.props.receiveTwoAlgos()
  }

  setAlgos(algos) {
    this.setState({ algos: algos });
  }

  getLinkId(algo) {
    let video = algo.videoSolution;
    const arr = video.split("/");
    return arr[arr.length - 1];
  }

  render() {
    const { clock, algos, twoAlgos } = this.state;
    const { dailyAlgos } = this.props;
    if (Object.keys(dailyAlgos).length === 0) return null;
    // console.log(dailyAlgos);
    if (!clock || !algos || !twoAlgos || !dailyAlgos) return null;
    return (
      <div>
        <div className="show-action-cont">
          <div className="two-daily-algs-cont">
            <div id="progress-bar">
              <ProgressBar userAlgosArr={this.props.userAlgosArr} />
              <span id="completion">Your Progress</span>
            </div>
            <div className="featured">
              <div className="feat-alg-cont">
                <p id="feat-alg">Featured Problems</p>
              </div>
              <div className="two-featured">
                {dailyAlgos.map((algo) => {
                  // console.log(algo);
                  return (
                    <div className="one-alg-cont">
                      {/* <a href={algo.link} className="one-alg-link">{algo.link}</a> */}
                      <iframe
                        className="algo-video"
                        title="Youtube player"
                        sandbox="allow-same-origin allow-forms allow-popups allow-scripts allow-presentation"
                        src={`https://youtube.com/embed/${this.getLinkId(
                          algo
                        )}?autoplay=0`}
                      ></iframe>
                      {/* <span className="one-alg-name">{algo.name}</span> */}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          {/* <p>{clock}</p> */}
        </div>
        <AllAlgosContainer algos={algos} />
      </div>
    );
  }
}

export default AlgosIndex;
