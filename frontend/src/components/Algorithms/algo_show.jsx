import React, { useEffect, useState } from "react";
import './algo_show.css' 

const AlgoShow = (props) => {
  const [videoSolution, setVideoSolution] = useState(null);
  const [textSolution, setTextSolution] = useState(null);
  const [name, setName] = useState(null);

  useEffect(() => {
    props.fetchAlgo(props.algoId)
      .then((resp) => {
        setVideoSolution(resp.algo.data.videoSolution)
        setTextSolution(resp.algo.data.textSolution)
        setName(resp.algo.data.name)
      })
  }, [])

  if (!videoSolution || !textSolution || !name) return null;
  return (
    <div>
      <div className="algo-show-cont">
        <span className="algo-show-name">{name}</span>
        <span className="text-solution">{textSolution}</span>
        <div className="video-solution-cont">
          <a className='video-link' href={videoSolution} target="_blank">
            <button className="video-btn">
              Go to video
            </button>
          </a> {/* make a video preview*/}
        </div>
      </div>
    </div>
  )
}

export default AlgoShow;