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
      <div className="contact-edit-card">
      <h2 className="card-heading">Contact Info</h2>
      <div className="contact-data-info">
        <div>{contact.name}</div>
        <div>{contact.title}</div>
        <div>{contact.company}</div>
      </div>
        <form className="card-form" onSubmit={(e) => handleSubmit(e)}>
        <div class="input">
          <input type="text" class="input-field" value={linkedIn} onChange={e => onChange(e, setLinkedIn)} />
          <label class="input-label">LinkedIn</label>
        </div>
        <div class="input">
          <input type="text" class="input-field" value={email} onChange={e => onChange(e, setEmail)} />
          <label class="input-label">Email</label>
        </div>
        <div class="input">
          <input type="text" class="input-field" value={phone} onChange={e => onChange(e, setPhone)} />
          <label class="input-label">Phone</label>
        </div>
        <div className="create-job-button">
            <button className="action-button">Update contact</button>
        </div>
      </form>
      </div>
    </div>
  )
}

export default ContactEdit;