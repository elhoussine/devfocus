import React, { useEffect, useState } from "react";

function ToggleCell(props) {
  const [applied, setApplied] = React.useState(props.value)

  const handleClick = e => {
    e.stopPropagation();
    setApplied(!applied);

    const contact = props.row.original
    const key = props.column.id
    contact[key] = !applied;

    props.updateContact(contact)
  }

  const checkbox = () => {

    if (applied) {
      return <div className="fa fa-check-square" onClick={handleClick}></div>
    } else {
      return <div className="fa fa-square-o" onClick={handleClick}></div>
    }
  }

  return (
    <div>
      {checkbox()}
    </div>
  )
}

export default ToggleCell