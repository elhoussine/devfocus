import React, { useEffect, useState } from "react";

function LinkCell(props) {
  const [link, setLink] = React.useState(props.value)
  const [edit, setEdit] = React.useState(false)

  useEffect(() => {
    setLink(props.value)
  }, [props.value])

  const onChange = e => {
    setLink(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault();
    e.stopPropagation();

    const contact = props.row.original
    const key = props.column.id
    contact[key] = link;
    
    props.updateContact(contact)
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
    <div>
      <a href={props.value} target="_blank">{props.value}</a>
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