import { body } from "express-validator"

export const newPostValidation = [
  body("place").notEmpty().withMessage("Falta el nombre del Lugar.").isString(),
  body("comments").notEmpty().withMessage("No hay comentarios."),
  body("image").notEmpty().withMessage("Falta la imagen del Lugar.").isURL().withMessage("La imagen debe ser una url."),
];
