const express = require("express");
const app = express();
const mongoose = require("mongoose");
const db = require("./config/keys").mongoURI;
// const db = process.env.mongoURI;
const users = require("./routes/api/users");
const jobs = require("./routes/api/jobs");
const algos = require("./routes/api/algos");
const userAlgos = require("./routes/api/userAlgos");
const contacts = require("./routes/api/contacts");
const bodyParser = require("body-parser");
const passport = require("passport");
const path = require('path');

if (process.env.NODE_ENV === "production") {
  app.use(express.static("frontend/build"));
  app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  });
}

mongoose
    .connect(db, {
        useNewUrlParser: true
    })
    .then(() => console.log("Connected to MongoDB successfully"))
    .catch((err) => console.log(err));


app.get("/", (req, res) => res.send("Hello World"));

app.use(passport.initialize());
require("./config/passport")(passport);

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

app.use("/api/users", users);
app.use("/api/jobs", jobs);
app.use("/api/algos", algos);
app.use("/api/user-algos", userAlgos);
app.use("/api/contacts", contacts);

const port = process.env.PORT || 5001;
app.listen(port, () => console.log(`Server is running on port ${port}`));