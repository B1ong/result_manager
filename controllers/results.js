import { Result } from "../model/results.js";

export async function createResult(req, res) {
  const userData = req.body; // Yes ma error aaucha kina ki we need to use a JSON File ging
  const results= new Result(userData);
  const createdResult = await results.save();
  res.json(createdResult);
}

const results= {
   
  

} //Reduce ma accmulator ko value  back garcha
export async function getResult(req, res) {
  const results = await Result.find()
    .populate(["exam", "students", "marks.subject"])
    .lean();
  const resultsWithSum = results.map((result) => ({
    ...results,
    totalMarks: result.marks.reduce((sum, mark) => sum + mark.mark, 0),
  }));
  res.json(resultsWithSum);
}