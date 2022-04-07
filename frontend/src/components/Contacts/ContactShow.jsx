import React, { useState, useEffect } from "react";

function ContactShow(props) {
  const contact = props.contacts[props.contactId]

  const formatDate = (date) => {
    let d = new Date(date);

    d.toLocaleDateString()

    let month = (d.getMonth() + 1).toString().padStart(2, '0');
    let day = d.getDate().toString().padStart(2, '0');
    let year = d.getFullYear();
  
    return [month, day, year].join('/');
  }

  const checkBox = (bool) => {
    if (bool) {
      return <div className="fa fa-check-square"></div>
    } else {
      return <div className="fa fa-square-o"></div>
    }
  }

  return (
    <div>
      <header>
        <h3>{contact.name}</h3>
      </header>
      <main>
        <div>
          <span>Company</span><span>{contact.company}</span>
        </div>
        <div>
          <span>Title</span><span>{contact.title}</span>
        </div>
        <div>
          <span>LinkedIn</span><span><a href={contact.linkdin}>{contact.linkdin}</a></span>
        </div>
        <div>
          <span>Email</span><span><a href={contact.email}>{contact.email}</a></span>
        </div>
        <div>
          <span>Phone</span><span>{contact.phone}</span>
        </div>
        <div>
          <span>First Contacted</span><span>{formatDate(contact.firstContactDate)}</span>
        </div>
        <div>
          <span>Response</span>
          {checkBox(contact.responded)}
        </div>
        <div>
          <span>Interview Date</span><span>{formatDate(contact.meetingDate)}</span>
        </div>
        <div>
          <span>Followed Up</span>
          {checkBox(contact.thanksFolowUp)}
        </div>
      </main>
      <button type="button" onClick={() => props.openContactModal("contactEdit", contact._id)}>Edit Contact</button>
    </div>
  )
}

export default ContactShow;