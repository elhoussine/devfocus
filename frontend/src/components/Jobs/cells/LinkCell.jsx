import React, { useEffect, useState } from "react";

function LinkCell(props) {
  const [link, setLink] = React.useState(props.value)
  const [edit, setEdit] = React.useState(false)

  const onChange = e => {
    setLink(e.target.value)
  }
  
  const onBlur = e => {
    setEdit(!edit)
  }

  let linkDisplay
  edit ? linkDisplay = (
    <div>
      <input type="text" value={link} onChange={onChange} onBlur={onBlur}/>
    </div>
  ) : linkDisplay = (
    <div>
      <a href={props.value}>{props.value}</a>
      <div onClick={() => setEdit(!edit)}>edit</div>
    </div>
  )


  return (
    <div>
      {linkDisplay}
    </div>
  )
}

export default LinkCell;