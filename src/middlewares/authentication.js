import jwt from "jsonwebtoken";
import { userModel } from "../models/users.model.js";


export const autheMiddleware = (req, res, next) => {

  const { authorization } = req.headers;

  if (!authorization) res.sendStatus(401);

  const token = authorization;

  try {

    const { id } = jwt.verify(token, "secret");

    const user = userModel.findOne(id);

    req.user = user // * agrega al req una nueva propiedad(usuario)

    next();

  } catch (error) {

    console.log(error);

    return res.sendStatus(401);
  }
};
