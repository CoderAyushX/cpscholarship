// studentSchema.js
import mongoose from 'mongoose';

const studentSchema = new mongoose.Schema(
  {
    rollNo: {
      type: String,
      required: true,
      unique: true,
    },
    firstName: {
      type: String,
      default: '',
    },
    lastName: {
      type: String,
      default: '',
    },
    fathersName: {
      type: String,
      default: '',
    },
    age: {
      type: String,
      default: '',
    },
    mobileNo: {
      type: String,
      default: '',
    },
    email: {
      type: String,
      default: '',
    },
    selectedClass: {
      type: String,
      default: '',
    },
    previousClassMarks: {
      type: String,
      default: '',
    },
    selectedTestDate: {
      type: String,
      default: '',
    },
    selectedTimeSlot: {
      type: String,
      default: '',
    },
    selectedScholarship: {
      type: String,
      default: '',
    },
  },
  { timestamps: true } 
);

export const Students = mongoose.models.Student || mongoose.model('Student', studentSchema);
