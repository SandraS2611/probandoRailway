import { param } from "express-validator"

export const findPostValidation = [
  param("postId")
  .isNumeric()
  .withMessage("La Id debe ser un número.")
  .toInt()  
];
