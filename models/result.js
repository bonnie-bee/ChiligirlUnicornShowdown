const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const resultSchema = new Schema({
  resultType: { type: String, required: true },
  amount: { type: Number, required: true },
  date: { type: String, required: true}
});

const Result = mongoose.model("Result", resultSchema);

module.exports = Result;
