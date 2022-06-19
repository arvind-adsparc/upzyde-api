import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "Please enter your first name"],
  },
  lastName: {
    type: String,
    required: [true, "Please enter your last name"],
  },
  company: {
    type: String,
    required: [true, "Please enter your company name"],
  },
  email: {
    type: String,
    required: [true, "Please enter your email"],
    unique: true,
    lowercase: true,
  },
  type: {
    type: String,
    required: [true, "Please select a company type"],
  },
  message: {
    type: String,
  },
  page: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Contact = mongoose.model("contact", contactSchema);

module.exports = Contact;
