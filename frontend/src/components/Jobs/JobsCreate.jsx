import React, { useEffect, useState } from "react";

function JobsCreate(props) {
  const [company, setCompany] = useState('');
  const [title, setTitle] = useState('');
  const [applied, setApplied] = useState(false);
  const [dateApplied, setDateApplied] = useState('');
  const [link, setLink] = useState('');
  const [interviewDate, setInterviewDate] = useState('');
  const [description, setDescription] = useState('');


  // console.log(company)

  const onChange = (e, setAction) => {
    setAction(e.target.value);
  }

  const toggleApplied = e => {
    setApplied(!applied)
  }
  
  // const changeDate = e => {
  //   console.log(e)
  // }

  const handleSubmit = () => {
    const job = {}
    job['company'] = company;
    job['dateApplied'] = dateApplied;
    job['description'] = description;
    job['interviewDate'] = interviewDate;
    job['link'] = link;
    job['status'] = applied;
    job['title'] = title;
    job['user'] = props.user.id

    console.log(job)
    
    props.createJob(job)
    props.closeModal()
  }

  return (
    <div>
      <form onSubmit={() => handleSubmit()}>
        <label>Company
          <input type="text" onChange={e => onChange(e, setCompany)}/>
        </label>
        <label>Title
          <input type="text" onChange={e => onChange(e, setTitle)}/>
        </label>
        <label>Applied?
          <input type="checkbox" onChange={e => toggleApplied(e)}/>
        </label>
        <label>Date Applied
          <input type="date" onChange={e => onChange(e, setDateApplied)}/>
        </label>
        <label>Link
          <input type="text" onChange={e => onChange(e, setLink)}/>
        </label>
        <label>Interview Date
          <input type="date" onChange={e => onChange(e, setInterviewDate)}/>
        </label>
        <label>Description
          <input type="textbox" onChange={e => onChange(e, setDescription)}/>
        </label>
        <button >Add job</button>
      </form>
    </div>
  )
}

export default JobsCreate;