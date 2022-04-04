const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AlgoSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
    textSolution: {
      type: String,
      required: true,
    },
    videoSolution: {
      type: String,
      required: true,
    },
    difficulty: {
      type: String,
      required: true
    },
    userRating: {
      type: Integer
    }
  },
  {
    timestamps: true,
  }
);

module.exports = Algorithm = mongoose.model("Algorithm", AlgoSchema);
