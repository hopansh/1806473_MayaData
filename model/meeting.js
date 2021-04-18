const mongoose = require("mongoose");
const Meeting = new mongoose.Schema({
  name: String,
  count:Number,
  date: Date,
  start:String,
  end:String
});

module.exports = mongoose.model("meeting",Meeting);