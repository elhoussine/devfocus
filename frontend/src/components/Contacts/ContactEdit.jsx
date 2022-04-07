import React, { useState, useEffect } from "react";

function ContactEdit(props) {
  const contact = props.contacts[props.contactId]

  const formatDate = (date) => {
    let d = new Date(date);

    d.toLocaleDateString()

    let month = (d.getMonth() + 1).toString().padStart(2, '0');
    let day = d.getDate().toString().padStart(2, '0');
    let year = d.getFullYear();
  
    return [year, month, day].join('-');
  }

  const [name, setName] = useState(contact.name);
  const [company, setCompany] = useState(contact.company);
  const [title, setTitle] = useState(contact.title);
  const [linkedIn, setLinkedIn] = useState(contact.linkdin);
  const [email, setEmail] = useState(contact.email);
  const [phone, setPhone] = useState(contact.phone);
  const [firstContact, setFirstContact] = useState(formatDate(contact.firstContactDate));
  const [response, setResponse] = useState(contact.responded);
  const [interviewDate, setInterviewDate] = useState(formatDate(contact.meetingDate));
  const [followUp, setFollowUp] = useState(contact.thanksFolowUp);

  const onChange = (e, setAction) => {
    setAction(e.target.value);
  };

  const toggleResponse = (e) => {
    setResponse(!response);
  };

  const responseDisplay = () => {
    if (response) {
      return <div className="fa fa-check-square" onClick={() => toggleResponse()}></div>
    } else {
      return <div className="fa fa-square-o" onClick={() => toggleResponse()}></div>
    }
  }

  const toggleFollowUp = () => {
    setFollowUp(!followUp);
  };

  const followUpDisplay = () => {
    if (followUp) {
      return <div className="fa fa-check-square" onClick={() => toggleFollowUp()}></div>
    } else {
      return <div className="fa fa-square-o" onClick={() => toggleFollowUp()}></div>
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();

    const newContact = Object.assign({}, contact)
    newContact["name"] = name;
    newContact["company"] = company;
    newContact["title"] = title;
    newContact["linkdin"] = linkedIn;
    newContact["email"] = email;
    newContact["phone"] = phone;
    newContact["firstContactDate"] = firstContact;
    newContact["responded"] = response;
    newContact["meetingDate"] = interviewDate;
    newContact["thanksFolowUp"] = followUp;
    newContact["user"] = props.user.id;
    
    props.updateContact(newContact);
    props.closeModal();
  };

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label>
          Name
          <input type="text" onChange={(e) => onChange(e, setName)} value={name}/>
        </label>
        <label>
          Company
          <input type="text" onChange={(e) => onChange(e, setCompany)} value={company}/>
        </label>
        <label>
          Title
          <input type="text" onChange={(e) => onChange(e, setTitle)} value={title}/>
        </label>
        <label>
          LinkedIn
          <input type="text" onChange={(e) => onChange(e, setLinkedIn)} value={linkedIn}/>
        </label>
        <label>
          Email
          <input type="text" onChange={(e) => onChange(e, setEmail)} value={email}/>
        </label>
        <label>
          Phone
          <input type="text" onChange={(e) => onChange(e, setPhone)} value={phone}/>
        </label>
        <label>
          First Contact
          <input type="date" onChange={(e) => onChange(e, setFirstContact)} value={firstContact}/>
        </label>
        <label>
          Response
          {responseDisplay()}
        </label>
        <label>
          Interview Date
          <input type="date" onChange={(e) => onChange(e, setInterviewDate)} value={interviewDate}/>
        </label>
        <label>
          Followed Up
          {followUpDisplay()}
        </label>
        <button type="submit">Submit Edits</button>
      </form>
    </div>
  )
}

export default ContactEdit;