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

  const [linkedIn, setLinkedIn] = useState(contact.linkdin);
  const [email, setEmail] = useState(contact.email);
  const [phone, setPhone] = useState(contact.phone);

  const onChange = (e, setAction) => {
    setAction(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();

    const newContact = Object.assign({}, contact);
    newContact["linkdin"] = linkedIn;
    newContact["email"] = email;
    newContact["phone"] = phone;
    
    props.updateContact(newContact);
    props.closeModal();
  };

  return (
    <div>
      <div>
        <div>Name {contact.name}</div>
        <div>Title {contact.title}</div>
        <div>Position {contact.position}</div>
      </div>
      <form onSubmit={(e) => handleSubmit(e)}>
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
        <button type="submit">Submit Edits</button>
      </form>
    </div>
  )
}

export default ContactEdit;