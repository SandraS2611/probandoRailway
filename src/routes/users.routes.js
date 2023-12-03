import { Router } from "express"
import {
    ctrlGetUserById,
    ctrlLogin,
    ctrlRegister
} from "../controllers/users.ctrls.js"
import { usersValidations } from "../validations/users.validations.js";


const usersRouter = Router()

usersRouter.get("/:userId", ctrlGetUserById)
usersRouter.post("/register", usersValidations,ctrlRegister);
usersRouter.post("/login", usersValidations, ctrlLogin);


usersRouter.patch("/");
usersRouter.delete("/");

export { usersRouter }