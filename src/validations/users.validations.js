import { body } from "express-validator"

export const usersValidations = [
    body("email").notEmpty().isEmail(),
    body("password").notEmpty().isStrongPassword({
        minLength : 10
    })
  ];