const Validator = require("validator");
const validText = require("./valid-text");

module.exports = function validateJobInput(data) {
   let errors = {};

   data.company = validText(data.company) ? data.company : "";
   if (Validator.isEmpty(data.company)) {
      errors.company = "Company field is required";
   }

   data.title = validText(data.title) ? data.title : "";
   if (Validator.isEmpty(data.title)) {
      errors.title = "Title field is required";
   }

   data.status = validText(data.status) ? data.status : "";
   if (Validator.isEmpty(data.status)) {
      errors.status = "Status field is required";
   }
   if (!Validator.isBoolean(data.status)) {
      errors.status = "Status field must be true or false";
   }

   data.dateApplied = validText(data.dateApplied) ? data.dateApplied : "";
   if (Validator.isEmpty(data.dateApplied)) {
      errors.dateApplied = "Date Applied field is required";
   }
   if (Validator.isDate(data.dateApplied)) {
      errors.dateApplied = "Date Applied must be a date";
   }

   return {
      errors,
      isValid: Object.keys(errors).length === 0,
   };
}