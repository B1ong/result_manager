import {Router} from 'express';
import { createExam, getExamList } from "../controllers/exams.js";

const examRouter = new Router();

examRouter.get("/", getExamList);
examRouter.post('/', createExam,);
export default examRouter;