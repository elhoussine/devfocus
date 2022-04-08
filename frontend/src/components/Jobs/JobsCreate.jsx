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

  const formatDate = () => {
    let d ;
    if(dateApplied === ''){
      d = new Date();
    }
    else
    {
      d = new Date(dateApplied);
    }
    d.toLocaleDateString()

    let month = (d.getMonth() + 1).toString().padStart(2, '0');
    let day = d.getDate().toString().padStart(2, '0');
    let year = d.getFullYear();

    return [year, month, day].join('-');
  }

  return (
    <div className="job-card">
      <h2 className="card-heading">Create New Job</h2>
      <form className="card-form" onSubmit={() => handleSubmit()}>

        <div class="input">
          <input type="text" class="input-field" required onChange={e => onChange(e, setCompany)} />
          <label class="input-label">Company</label>
        </div>

        <div class="input">
          <input type="text" class="input-field" required onChange={e => onChange(e, setTitle)} />
          <label class="input-label">Title</label>
        </div>

        <div class="input">
          <input type="text" class="input-field" onChange={e => onChange(e, setLink)} />
          <label class="input-label">Link</label>
        </div>

        <div class="checkbox">
          <label class="checkbox-label">Applied?</label>
          <input type="checkbox" class="checkbox-field" onChange={e => toggleApplied(e)} />
        </div>

        <div class="date">
          <label class="date-label">Date Applied</label>
          <input type="date" class="date-field" value={formatDate()} onChange={e => onChange(e, setDateApplied)} />
        </div>

        <div class="date">
          <label class="date-label">Interview Date</label>
          <input type="date" class="date-field" onChange={e => onChange(e, setInterviewDate)} />
        </div>
        {/* <label>Description
          <input type="textbox" onChange={e => onChange(e, setDescription)}/>
        </label> */}
        <div className="create-job-button">
          <button className="action-button" >Add job</button>
        </div>
      </form>
    </div>
  )
}

export default JobsCreate;