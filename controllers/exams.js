import {Exam} from '../model/exams.js'
export async function getExamList(req, res) { 
 const exams = await Exam.find();
 res.json(exams);
}

export async function createExam(req,res) { 
  const userData= req.body; // Yes ma error aaucha kina ki we need to use a JSON File ging
  const exams = new Exam(userData);
  const createdExam = await exams.save(); 
  res.json (createdExam);
}
