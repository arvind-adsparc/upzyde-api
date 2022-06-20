import mongoose from "mongoose";

const submissionSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Please enter your email"],
    lowercase: true,
  },
  page: {
    type: String,
  },
  formName: {
    type: String,
    required: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Submission = mongoose.model("submission", submissionSchema);

module.exports = Submission;
