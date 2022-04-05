const mongoose = require("mongoose");
const db = require("../config/keys").mongoURI;
const Job = require("../models/Job")
const ObjectId = require('mongodb').ObjectId;

mongoose
   .connect(db, {
      useNewUrlParser: true
   })
   .then(() => console.log("Connected to MongoDB successfully"))
   .catch((err) => console.log(err));

const seedJobs = [{
      user: ObjectId("6249f9d9b4d85ea423bd9e4c"),
      company: "Google",
      title: "Software Engineer I",
      status: true,
      dateApplied: '04/04/2022',
      description: 'Software Engineer I description ...',
      link: "https://www.google.com/",
      interviewDate: '05/04/2022'
   },
   {
      user: ObjectId("6249f9d9b4d85ea423bd9e4c"),
      company: "Apple",
      title: "Software Engineer II",
      status: true,
      dateApplied: '04/03/2022',
      description: 'Software Engineer II description ...',
      link: "https://www.apple.com/",
      interviewDate: '05/03/2022'
   },
   {
      user: ObjectId("6249f9d9b4d85ea423bd9e4c"),
      company: "Facebook",
      title: "Software Engineer III",
      status: true,
      dateApplied: '04/02/2022',
      description: 'Software Engineer III description ...',
      link: "https://www.facebook.com/",
      interviewDate: '05/02/2022'
   }

];

const seedDB = async () => {
   await Job.deleteMany({});
   await Job.insertMany(seedJobs);
};

seedDB().then(() => {
   mongoose.connection.close();
})