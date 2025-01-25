import mongoose from "mongoose"; 

const subjectSchema = mongoose.Schema({
  subjectCode: {
      type: Number,
      required: true,
  },
  subjectName: {
      type: String,
      required: true,
  },
  semester: {
      type: String,
      enum: ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII'],
      required: true,
  }
})

const Subject = new mongoose.model('Subject', subjectSchema);
export {Subject};