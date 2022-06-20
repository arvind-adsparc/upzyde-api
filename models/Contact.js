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
    lowercase: true,
  },
  companyType: {
    type: String,
    required: [true, "Please select a company type"],
  },
  message: {
    type: String,
    required: false,
  },
  formName: {
    type: String,
    required: false,
  },
  page: {
    type: String,
    required: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Contact = mongoose.model("contact", contactSchema);

module.exports = Contact;
