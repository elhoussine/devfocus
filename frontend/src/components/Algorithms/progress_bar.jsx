import React, { useEffect, useState } from "react";
import { CircularProgressbar, CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const ProgressBar = (props) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
   setValue(Math.floor((props.userAlgosArr.length / 76) * 100)) 
  }, [props.userAlgosArr.length])

  return (
    <div>
      <div style={{ width: 180, height: 180 }}>
        <CircularProgressbarWithChildren
          radius={90}
          value={value}
          text={`${value}%`}
          styles={buildStyles({
            // Rotation of path and trail, in number of turns (0-1)
            rotation: 0.5,

            // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
            strokeLinecap: "round",

            // Text size
            textSize: "16px",

            // How long animation takes to go from one percentage to another, in seconds
            pathTransitionDuration: 0.8,

            // Can specify path transition in more detail, or remove it entirely
            // pathTransition: 'none',

            // Colors
            pathColor: `#e84142`, //transparency, attach to end of rgba: ${value / 100}
            textColor: "#e84142",
            trailColor: "#E7E7EF",
            // backgroundColor: "#e84142",
          })}
        />
      </div>
    </div>
  );
}

export default ProgressBar;