const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserAlgoSchema = new Schema({
   user: {
      type: Schema.Types.ObjectId,
      ref: 'users'
   },
   algo: {
      type: Schema.Types.ObjectId,
      ref: 'algorithms'
   },
   completed: {
      type: Boolean,
      required: true,
      default: false
   },
   rating: {
      type: Number
   }
});

module.exports = UserAlgo = mongoose.model('UserAlgo', UserAlgoSchema);