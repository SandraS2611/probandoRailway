import { validationResult } from "express-validator";

export const applicateValidations = (req, res, next) => {
    const errors = validationResult(req) //! SE DEBE HACER EN TODAS LAS PÁGINAS (en todos los q usen validaciones)
    if (!errors.isEmpty()) {
      return res.status(400).json(errors.array())
    }
    next()
  }