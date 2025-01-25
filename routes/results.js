import { Router } from "express";
import { createResult, getResult } from "../controllers/results.js";

const resultRouter = new Router();
resultRouter.get("/", getResult);
resultRouter.post("/", createResult);

export default resultRouter;
