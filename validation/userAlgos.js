const Validator = require("validator");
const validText = require("./valid-text");

module.exports = function validateUserAlgoInput(data) {
   let errors = {};

   if (!Validator.isBoolean(data.completed)) {
      errors.completed = "Completed field must be true or false";
   }

   return {
      errors,
      isValid: Object.keys(errors).length === 0,
   };
}