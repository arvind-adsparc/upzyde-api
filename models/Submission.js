import mongoose from "mongoose";

const submissionSchema = new mongoose.Schema({
  email: {
    type: String,
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
