import mongoose from "mongoose";

const requestDemoSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "Please enter your first name"],
  },
  lastName: {
    type: String,
    required: [true, "Please enter your last name"],
  },
  email: {
    type: String,
    required: [true, "Please enter your email"],
    lowercase: true,
  },
  format: {
    type: String,
    required: [true, "Please enter a format"],
  },
  formName: {
    type: String,
    required: false,
  },
  page: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const RequestDemo = mongoose.model("requestDemo", requestDemoSchema);

module.exports = RequestDemo;
