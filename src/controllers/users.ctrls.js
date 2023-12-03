import { userModel } from "../models/users.model.js";
import { env } from "../../settings/envs.js"
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt"


export function ctrlGetUserById (req, res) {
const { userId } = req.params

const user = userModel.findOne({ id: userId })

if (!user) {
  return res.sendStatus(404)
}
res.status(200).json(user)
}


export async function ctrlCreateUser(req, res) {
  const { name, email, password } = req.body

  const user = await userModel.create({ name, email, password })

  if (!user) return res.sendStatus(404)
 
  const token = jwt.sign({ userIdd: user.id }, env-process.JWT_SECRET);

  res.status(201).json({ token })
}


export async function ctrlLogin(req, res) {
  
  const { email, password } = req.body;
  
  const user = await loginUser({ email, password });
 
  if (!user) return res.sendStatus(404)
 
  const token = jwt.sign({ userId: user.id }, env-process.JWT_SECRET);
 
  res.status(200).json({ token });
}










// export const ctrlLogin = async (req, res) => {
  
//   const { email, password } = req.body;
  
//   const user = userModel.findByEmail(email);
 
//   if (!user) return res.sendStatus(404)

//   const isMatch = await bcrypt.compare(password, user.password)  
 
//   if (!isMatch) return res.sendStatus(404); // todo CONTRASEÑA ENCRIPTADA
 
//   const token = jwt.sign({ id: user.id }, "secret");
 
//   res.status(201).json({ token });
// }




export const ctrlRegister = async (req, res) => {
  
    const newUser = await userModel.create(req.body);
  
    if (!newUser) return res.sendStatus(400);
  
    const token = jwt.sign({ id: newUser.id }, "secret");
  
    res.status(201).json({ token });
  };