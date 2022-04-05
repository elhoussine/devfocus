const Validator = require("validator");
const validText = require("./valid-text");

module.exports = function validateAlgoInput(data) {
   let errors = {};

   //No validations required since Algorithms are seeded and constant 

   return {
      errors,
      isValid: Object.keys(errors).length === 0,
   };
}