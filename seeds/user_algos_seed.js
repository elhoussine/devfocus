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

const seedUserAlgos = [
];

const seedDB = async () => {
   await UserAlgo.deleteMany({});
   await UserAlgo.insertMany(seedUserAlgos);
};

seedDB().then(() => {
   mongoose.connection.close();
})