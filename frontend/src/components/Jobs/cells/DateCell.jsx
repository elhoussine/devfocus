import React, { useEffect, useState} from "react";

function DateCell(props) {
  // let d = new Date(props.value)
  const formatDate = () => {
    let d = new Date(props.value);
    let month = (d.getMonth() + 1).toString().padStart(2, '0');
    let day = d.getDate().toString().padStart(2, '0');
    let year = d.getFullYear();

    return [year, month, day].join('-');
  }

  const [date, setDate] = useState(formatDate())

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      const job = props.row.original
      const key = props.column.id
      job[key] = date;

      props.updateJob(job)
    }
  }

  const onBlur = e => {
    setDate(formatDate);
  }

  return (
    <form>
      <input type="date" value={date} onChange={(e) => setDate(e.target.value)} onBlur={onBlur} onKeyDown={handleKeyDown}/>
    </form>
  )
}

export default DateCell