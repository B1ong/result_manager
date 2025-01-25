import {Router} from 'express';
import { createSubject, getSubjectList } from "../controllers/subjects.js";

const subjectRouter = new Router();

subjectRouter.get("/", getSubjectList);
subjectRouter.post('/', createSubject);
export default subjectRouter;