export const validationPost = (req, res, next) => {
  const { place, comments, image } = req.body;

    if (!place) return res.status(400).send("Failed because place is required");
    if (!comments)
      return res.status(400).send("Failed because are not comments ");
    if (!image)
      return res.status(400).send("Failed because the iamge is required");
  
  next();
};
