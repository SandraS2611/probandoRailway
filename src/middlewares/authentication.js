import jwt from "jsonwebtoken";
import { userModel } from "../models/users.model.js";


export const autheMiddleware = (req, res, next) => {

  const { authorization } = req.headers;

  if (!authorization) {

    res.sendStatus(401);
  }

  try {

    const { userId } = jwt.verify(authorization, env-process.JWT_SECRET);

    const user = userModel.findOne({ id: userId });

    if (!user) {   // * agrega al req una nueva propiedad(usuario)
     
      console.log("No hay ususario");

    return res.sendStatus(401);
    }
      
   req.user = user;
   next()
  } catch(error){
    return res.sendStatus(402)
  }
};
