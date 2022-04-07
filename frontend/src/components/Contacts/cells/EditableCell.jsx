import React, { useEffect, useState } from "react";

function EditableCell(props) {
  const [value, setValue] = React.useState(props.value)

  const onChange = e => {
    setValue(e.target.value)
  }


  const handleSubmit = e => {
    e.preventDefault();
    e.stopPropagation();

    const contact = props.row.original
    const key = props.column.id
    contact[key] = value;

    props.updateContact(contact)
  }

  const onBlur = e => {
    setValue(props.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={value} onChange={onChange} onBlur={onBlur}/>
    </form>
  )
}

export default EditableCell;