const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const resultSchema = new Schema({
  type: { type: String, required: true },
  amount: { type: Integer, required: true },
  date: { type: Date, default: Date.now }
});

const Result = mongoose.model("Result", resultSchema);

module.exports = Result;
