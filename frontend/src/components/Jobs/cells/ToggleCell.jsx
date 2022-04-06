import React, { useEffect, useState } from "react";

function ToggleCell(props) {
  const [applied, setApplied] = React.useState(props.value)

  const handleClick = e => {
    e.stopPropagation();
    setApplied(!applied);

    const job = props.row.original
    const key = props.column.id
    job[key] = !applied;

    props.updateJob(job)
  }

  const checkbox = () => {
    // console.log(applied)
    if (applied) {
      return <div className="fa fa-check-square" onClick={handleClick}></div>
    } else {
      return <div className="fa fa-square-o" onClick={handleClick}></div>
    }
  }

  let statusDisplay
  applied ? statusDisplay = "Yes" : statusDisplay = "No" 
  return (
    <div>
      {/* <div onClick={handleClick}>{statusDisplay}</div> */}
      {checkbox()}
    </div>
  )
}

export default ToggleCell