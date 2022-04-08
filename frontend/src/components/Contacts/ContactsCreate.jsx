import React, { useEffect, useState } from "react";

function ContactsCreate(props) {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [title, setTitle] = useState("");
  const [linkedIn, setLinkedIn] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [firstContact, setFirstContact] = useState("");
  const [response, setResponse] = useState(false);
  const [interviewDate, setInterviewDate] = useState("");
  const [followUp, setFollowUp] = useState(false);

  // console.log(company)

  const onChange = (e, setAction) => {
    setAction(e.target.value);
  };

  const toggleResponse = (e) => {
    setResponse(!response);
  };

  // const changeDate = e => {
  //   console.log(e)
  // }

  const handleSubmit = () => {
    const contact = {};
    contact["name"] = name;
    contact["company"] = company;
    contact["title"] = title;
    contact["linkdin"] = linkedIn;
    contact["email"] = email;
    contact["phone"] = phone;
    contact["firstContactDate"] = firstContact;
    contact["responded"] = response;
    contact["meetingDate"] = interviewDate;
    contact["thanksFolowUp"] = followUp;

    contact["user"] = props.user.id;
    props.createContact(contact);
    props.closeModal();
  };

  const formatDate = () => {
    let d;
    if (firstContact === '') {
      d = new Date();
    }
    else {
      d = new Date(firstContact);
    }
    d.toLocaleDateString()

    let month = (d.getMonth() + 1).toString().padStart(2, '0');
    let day = d.getDate().toString().padStart(2, '0');
    let year = d.getFullYear();

    return [year, month, day].join('-');
  }

  return (
    <div>
      <div className="contact-card">
        <h2 className="card-heading">Create New Contact</h2>
        <form className="card-form" onSubmit={() => handleSubmit()}>

          <div class="input">
            <input type="text" class="input-field" required onChange={e => onChange(e, setName)} />
            <label class="input-label">Name</label>
          </div>

          <div class="input">
            <input type="text" class="input-field" required onChange={e => onChange(e, setCompany)} />
            <label class="input-label">Company</label>
          </div>

          <div class="input">
            <input type="text" class="input-field" required onChange={e => onChange(e, setTitle)} />
            <label class="input-label">Title</label>
          </div>

          <div class="input">
            <input type="text" class="input-field" onChange={e => onChange(e, setLinkedIn)} />
            <label class="input-label">LinkedIn</label>
          </div>

          <div class="input">
            <input type="text" class="input-field" onChange={e => onChange(e, setEmail)} />
            <label class="input-label">Email</label>
          </div>
        
          <div class="input">
            <input type="text" class="input-field" onChange={e => onChange(e, setPhone)} />
            <label class="input-label">Phone</label>
          </div>

          <div class="date">
            <label class="date-label">First Contact Date</label>
            <input type="date" class="date-field" value={formatDate()} onChange={e => onChange(e, setFirstContact)} />
          </div>
        {/* <label>
          Response
          <input type="checkbox" onChange={(e) => toggleResponse(e)} />
        </label>
        <label>
          Interview Date
          <input type="text" onChange={(e) => onChange(e, setInterviewDate)} />
        </label>
        <label>
          Followed Up
          <input type="text" onChange={(e) => onChange(e, setFollowUp)} />
        </label> */}
          <div className="create-job-button">
            <button className="action-button" >Add Contact</button>
          </div>
      </form>
      </div>
    </div>
  );
}

export default ContactsCreate;
