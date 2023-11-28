import { Router } from "express"
import { errorHandler } from "../validations/error.handler.js";

const commentsRouter = Router()

commentsRouter.get("/", errorHandler);
commentsRouter.post("/", errorHandler);
commentsRouter.patch("/", errorHandler);
commentsRouter.delete("/", errorHandler);


export { commentsRouter }