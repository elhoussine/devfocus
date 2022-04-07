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

  return (
    <div>
      <form onSubmit={() => handleSubmit()}>
        <label>
          Name
          <input type="text" onChange={(e) => onChange(e, setName)} />
        </label>
        <label>
          Company
          <input type="text" onChange={(e) => onChange(e, setCompany)} />
        </label>
        <label>
          Title
          <input type="text" onChange={(e) => onChange(e, setTitle)} />
        </label>
        <label>
          LinkedIn
          <input type="text" onChange={(e) => onChange(e, setLinkedIn)} />
        </label>
        <label>
          Email
          <input type="text" onChange={(e) => onChange(e, setEmail)} />
        </label>
        <label>
          Phone
          <input type="text" onChange={(e) => onChange(e, setPhone)} />
        </label>
        <label>
          First Contact
          <input type="date" onChange={(e) => onChange(e, setFirstContact)} />
        </label>
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
        <button>Add Contact</button>
      </form>
    </div>
  );
}

export default ContactsCreate;
