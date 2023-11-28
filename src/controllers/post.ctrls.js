import { postModel } from "../models/post.model.js";

//!CONTROLADORES DE POST

export const ctrlGetAllPosts = (req, res, next) => {
  try {
    const placesPosts = postModel.findAll();
    res.json(placesPosts);
  } catch (error) {
    next("No hay post"); //todo para que vaya al manejador de errores antes
  }
};

export const ctrlCreatePost = (req, res, next) => {
  try {
    const { place, comments, image } = req.body;
    postModel.create({ place, comments, image });
    res.sendStatus(201);
  } catch (error) {
    next("No hay post");
  }
};

export const ctrlOnePlaceById = (req, res, next) => {
  try {
    const { postId } = req.params;
    const post = postModel.findOne({ id: postId });
    if (!post) {
      return res.sendStatus(404);
    }
    res.json(post);
  } catch (error) {
    next();
  }
};

export const ctrlActualizeById = (req, res) => {
  const { postId } = req.params;
  const { place, comments, image } = req.body;
  const post = postModel.update(postId, { place, comments, image });
  res.sendStatus(200);
  if (!post) {
    res.sendStatus(404);
  }
};

export const ctrlErasePostById = (req, res) => {
  const { postId } = req.params;
  postModel.destroy({ id: postId });
  res.sendStatus(200);
};
//! NO FUNCIONA EL DELETE