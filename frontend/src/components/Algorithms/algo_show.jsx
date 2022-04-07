import React, { useEffect, useState } from "react";

const AlgoShow = (props) => {
  const [videoSolution, setVideoSolution] = useState(null)
  const [textSolution, setTextSolution] = useState(null)

  useEffect(() => {
    props.fetchAlgo(props.algoId)
      .then((resp) => {
        setVideoSolution(resp.algo.data.videoSolution)
        setTextSolution(resp.algo.data.textSolution)
      })
  }, [])

  if (!videoSolution || !textSolution) return null;
  return (
    <div>
      <div className="algo-show-cont">
        <a href={videoSolution}>{videoSolution}</a>
        <span>{textSolution}</span>
      </div>
    </div>
  )
}

export default AlgoShow;