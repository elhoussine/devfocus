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
        // console.log(resp.algo.data.videoSolution);
      })
  }, [])

  const getLinkId = () => {
    let video = videoSolution;
    const arr = video.split('/'); 
    return arr[arr.length - 1];
  }

  if (!videoSolution || !textSolution || !name ) return null;
  return (
    <div>
      <div className="algo-show-cont">
        <span className="algo-show-name">{name}</span>
        <span className="text-solution">{textSolution}</span>
        <div className="video-solution-cont">
          <iframe className='algo-video'
            title='Youtube player'
            sandbox='allow-same-origin allow-forms allow-popups allow-scripts allow-presentation'
            src={`https://youtube.com/embed/${getLinkId()}?autoplay=0`}>
          </iframe>
        </div>
      </div>
    </div>
  )
}

export default AlgoShow;