import express from "express";

import morgan from "morgan";
import cors from "cors";
import helmet from "helmet";

import { postRouter } from "./routes/posts.routes.js";
import { commentsRouter } from "./routes/comments.routes.js";
import { usersRouter } from "./routes/users.routes.js";

import { env } from "../settings/envs.js"; 
import { startConnection } from "../settings/database.js";

const app = express();

//todo MIDDLEWARES se ejecutan antes de llegar a las rutas

//todo COMUNES
app.use(morgan("dev"));
app.use(cors());
app.use(helmet());

//todo para el BODY
app.use(express.json());
app.use(express.static("public"));

//todo para los FORMULARIOS HTML
app.use(express.urlencoded({ extended: false }));

//todo VALIDACIÓN PERSONALIZADA
//app.use(validationPost);

//? ruta normal dirige a la pagina principal
app.get("/", (req, res) => {
  res.sendFile("index.html");
});

//*ROUTES
app.use("/posts", postRouter);
app.use("/users", usersRouter);
app.use("/comments", commentsRouter);

//! para que arranque el server
app.listen(env.PORT, async () => {
  await startConnection()
  console.log(`Server on port ${env.PORT}`);
});
