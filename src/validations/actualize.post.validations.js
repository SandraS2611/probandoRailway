import { body, param } from "express-validator";

export const actualizePostValidation = [
  param("postId").isNumeric().withMessage("La ide debe ser un número.").toInt(),
  body("place")
    .optional()
    .isString()
    .withMessage("El nombre del lugar debe ser un string."),
  body("comments")
    .optional()
    .isString()
    .withMessage("El comentario debe ser un string."),
  body("image").optional().isURL().withMessage("La imagen debe ser una url."),
];
