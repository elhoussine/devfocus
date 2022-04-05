const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ContactSchema = new Schema({
   user: {
      type: Schema.Types.ObjectId,
      ref: 'users'
   },
   name: {
      type: String,
      required: true
   },
   company: {
      type: String,
      required: true
   },
   title: {
      type: String,
      required: true
   },
   linkdin: {
      type: String
   },
   email: {
      type: String
   },
   phone: {
      type: String
   },
   firstContactDate: {
      type: Date,
      default: Date.now
   },
   responded: {
      type: Boolean
   },
   meetingDate: {
      type: Date
   },
   thanksFolowUp: {
      type: Boolean
   }
});

module.exports = Contact = mongoose.model('Contact', ContactSchema);