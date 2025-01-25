import {Subject} from '../model/subjects.js'
export async function getSubjectList(req, res) { 
 const subjects = await Subject.find();
 res.json(subjects);
}

export async function createSubject(req,res) { 
  const userData= req.body; // Yes ma error aaucha kina ki we need to use a JSON File ging
  const subject = new Subject(userData);
  const createdSubject = await subject.save(); 
  res.json (createdSubject);
}
