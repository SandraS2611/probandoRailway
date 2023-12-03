import { Router } from "express"
import {
    ctrlLogin,
    ctrlRegister
} from "../controllers/users.ctrls.js"
import { usersValidations } from "../validations/users.validations.js";


const usersRouter = Router()

usersRouter.post("/register", usersValidations,ctrlRegister);
usersRouter.post("/login", usersValidations, ctrlLogin);


usersRouter.patch("/");
usersRouter.delete("/");

export { usersRouter }