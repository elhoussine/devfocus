import React, { useEffect, useState } from "react";

function EditableCell(props) {
  const [value, setValue] = React.useState(props.value)

  const onChange = e => {
    setValue(e.target.value)
  }

  const onBlur = e => {
    // Will handle updating the job data
  }

  // console.log(props)

  return (
    <input type="text" value={value} onChange={onChange} /*onBlur={onBlur}*//>
  )
}

export default EditableCell;