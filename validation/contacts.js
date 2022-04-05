const Validator = require("validator");
const validText = require("./valid-text");

module.exports = function validateContactInput(data) {
   let errors = {};

   data.name = validText(data.name) ? data.name : "";
   if (Validator.isEmpty(data.name)) {
      errors.name = "Name field is required";
   }

   data.company = validText(data.company) ? data.company : "";
   if (Validator.isEmpty(data.company)) {
      errors.company = "Company field is required";
   }

   data.title = validText(data.title) ? data.title : "";
   if (Validator.isEmpty(data.title)) {
      errors.title = "Title field is required";
   }

   // data.linkdin = validText(data.linkdin) ? data.linkdin : "";
   // if (!Validator.isEmpty(data.linkdin)) {
   //    errors.linkdin = "Linkdin must be a link";
   // }

   // if (Validator.isDate(data.firstContactDate)) {
   //    errors.firstContactDate = "First Contact Date must be a date";
   // }

   // if (!Validator.isBoolean(data.responded)) {
   //    errors.responded = "Responded field must be true or false";
   // }

   // if (Validator.isDate(data.meetingDate)) {
   //    errors.meetingDate = "Meeting Date must be a date";
   // }

   // if (!Validator.isBoolean(data.thanksFolowUp)) {
   //    errors.thanksFolowUp = "Thank you follow up field must be true or false";
   // }

   return {
      errors,
      isValid: Object.keys(errors).length === 0,
   };
}