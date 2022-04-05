const mongoose = require("mongoose");
const db = require("../config/keys").mongoURI;
const Contact = require("../models/Contact")
const ObjectId = require('mongodb').ObjectId;

mongoose
   .connect(db, {
      useNewUrlParser: true
   })
   .then(() => console.log("Connected to MongoDB successfully"))
   .catch((err) => console.log(err));

const seedContacts = [{
      user: ObjectId("6249f9d9b4d85ea423bd9e4c"),
      name: 'Contact One',
      company: "Google",
      title: "Program Manager",
      linkdin: "https://www.linkdin.com/google",
      email: "contact-one@google.com",
      phone: '415-1234567',
      firstContactDate: '04/04/2022',
      responded: true,
      meetingDate: '05/04/2022',
      thanksFolowUp: false
   },
   {
      user: ObjectId("6249f9d9b4d85ea423bd9e4c"),
      name: 'Contact Two',
      company: "Apple",
      title: "Team Lead",
      linkdin: "https://www.linkdin.com/apple",
      email: "contact-two@apple.com",
      phone: '415-7654321',
      firstContactDate: '04/03/2022',
      responded: true,
      meetingDate: '05/03/2022',
      thanksFolowUp: true
   },
   {
      user: ObjectId("6249f9d9b4d85ea423bd9e4c"),
      name: 'Contact Three',
      company: "Meta",
      title: "Recruiter",
      linkdin: "https://www.linkdin.com/facebook",
      email: "contact-three@facebook.com",
      phone: '415-3456789',
      firstContactDate: '04/02/2022',
      responded: false,
      meetingDate: '05/02/2022',
      thanksFolowUp: false
   },
   {
      user: ObjectId("624c7ef742b9561f0d5aa4b6"),
      name: 'Contact Three',
      company: "Facebook",
      title: "Recruiter",
      linkdin: "https://www.linkdin.com/facebook",
      email: "contact-three@facebook.com",
      phone: '415-3456789',
      firstContactDate: '04/02/2022',
      responded: false,
      meetingDate: '05/02/2022',
      thanksFolowUp: false
   },
   {
      user: ObjectId("624c7ef742b9561f0d5aa4b6"),
      name: 'Contact Three',
      company: "Facebook",
      title: "Recruiter",
      linkdin: "https://www.linkdin.com/facebook",
      email: "contact-three@facebook.com",
      phone: '415-3456789',
      firstContactDate: '04/02/2022',
      responded: false,
      meetingDate: '05/02/2022',
      thanksFolowUp: false
   }

];

const seedDB = async () => {
   await Contact.deleteMany({});
   await Contact.insertMany(seedContacts);
};

seedDB().then(() => {
   mongoose.connection.close();
})