import React, { useEffect, useState } from "react";

function ToggleCell(props) {
  console.log(props);
  const [bool, setBool] = React.useState(props.value)

  const handleClick = e => {
    setBool(!bool);

    //TODO add update Jobs here
    //If true, set date applied to current date
    //If false set date applied to null
  }

  let statusDisplay
  bool ? statusDisplay = "Yes" : statusDisplay = "No" 
  return (
    <div onClick={handleClick}>{statusDisplay}</div>
  )
}

export default ToggleCell