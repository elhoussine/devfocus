const mongoose = require("mongoose");
const db = require("../config/keys").mongoURI;
const UserAlgo = require("../models/UserAlgo")
const ObjectId = require('mongodb').ObjectId;

mongoose
   .connect(db, {
      useNewUrlParser: true
   })
   .then(() => console.log("Connected to MongoDB successfully"))
   .catch((err) => console.log(err));

const seedUserAlgos = [{
      user: ObjectId("6249f9d9b4d85ea423bd9e4c"),
      algo: ObjectId("624a6d0522389e8cf4f05192"),
      completed: true,
      rating: 5
   },
   {
      user: ObjectId("6249f9d9b4d85ea423bd9e4c"),
      algo: ObjectId("624a6d0522389e8cf4f05194"),
      completed: false,
      rating: 4
   },
   {
      user: ObjectId("6249f9d9b4d85ea423bd9e4c"),
      algo: ObjectId("624a6d0522389e8cf4f0519a"),
      completed: true,
      rating: 3
   },
   {
      user: ObjectId("624c7ef742b9561f0d5aa4b6"),
      algo: ObjectId("624a6d0522389e8cf4f05192"),
      completed: true,
      rating: 5
   }, {
      user: ObjectId("624c7ef742b9561f0d5aa4b6"),
      algo: ObjectId("624a6d0522389e8cf4f05194"),
      completed: false,
      rating: 4
   }, {
      user: ObjectId("624c7ef742b9561f0d5aa4b6"),
      algo: ObjectId("624a6d0522389e8cf4f0519a"),
      completed: true,
      rating: 3
   }

];

const seedDB = async () => {
   await UserAlgo.deleteMany({});
   await UserAlgo.insertMany(seedUserAlgos);
};

seedDB().then(() => {
   mongoose.connection.close();
})