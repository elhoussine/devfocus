import React, { useEffect, useState } from "react";

function LinkCell(props) {
  const [link, setLink] = React.useState(props.value)
  const [edit, setEdit] = React.useState(false)

  const onChange = e => {
    setLink(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault();
    e.stopPropagation();

    const job = props.row.original
    const key = props.column.id
    job[key] = link;
    
    props.updateJob(job)
      .then(() => setEdit(!edit))
  }
  
  const onBlur = e => {
    setLink(props.value)
    setEdit(!edit)
  }

  let linkDisplay
  edit ? linkDisplay = (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={link} onChange={onChange} onBlur={onBlur}/>
      </form>
    </div>
  ) : linkDisplay = (
    <div className="jobs-link-cell">
      <div className="jobs-link-cell-edit" onClick={() => setEdit(!edit)}>
      <a href={props.value}>{props.value}</a>
        <div className="fa fa-pencil"></div>
      </div>
    </div>
  )


  return (
    <div className="jobs-link-container">
      {linkDisplay}
    </div>
  )
}

export default LinkCell;