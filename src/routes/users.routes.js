import { Router } from "express"
import { usersValidations } from "../validations/users.validations.js";


const usersRouter = Router()

usersRouter.get("/");
usersRouter.post("/", usersValidations);
usersRouter.patch("/");
usersRouter.delete("/");

export { usersRouter }