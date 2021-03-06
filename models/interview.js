const mongoose = require("mongoose");

const interviewSchema = new mongoose.Schema({
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Student",
    required: true,
  },
  company: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Company",
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  result_status: {
    type: String,
    enum: ["pass", "fail", "on_hold", "didnt_attempt"],
  },
});

const Interview = mongoose.model("Interview", interviewSchema);
module.exports = Interview;
