import {Student} from '../model/students.js'
export async function getStudentList(req, res) { 
 const students = await Student.find();
 res.json(students);
}

export async function createStudent(req,res) { 
  const userData= req.body; // Yes ma error aaucha kina ki we need to use a JSON File ging
  const student = new Student(userData);
  const createdStudent = await student.save(); 
  res.json (createdStudent);
}
