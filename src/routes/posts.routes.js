import { Router } from "express";
import {
  ctrlActualizeById,
  ctrlCreatePost,
  ctrlErasePostById,
  ctrlGetAllPosts,
  ctrlOnePlaceById,
} from "../controllers/post.ctrls.js";
import { newPostValidation } from "../validations/new.post.validation.js";
import { errorHandler } from "../validations/error.handler.js";
import { applicateValidations } from "../middlewares/applicate.validations.js";
import { findPostValidation } from "../validations/find.posts.validations.js";
import { actualizePostValidation } from "../validations/actualize.post.validations.js";

const postRouter = Router();

postRouter.get("/", errorHandler, ctrlGetAllPosts);
postRouter.get(
  "/:postId",
  findPostValidation,
  applicateValidations,
  ctrlOnePlaceById
);

postRouter.post("/", newPostValidation, applicateValidations, ctrlCreatePost);

postRouter.patch(
  "/:postId",
  actualizePostValidation,
  applicateValidations,
  ctrlActualizeById
);

postRouter.delete("/:postId", findPostValidation, applicateValidations, ctrlErasePostById);

export { postRouter };
