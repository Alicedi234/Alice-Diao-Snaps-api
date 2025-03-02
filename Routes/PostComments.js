import express from "express";
import fs from "fs";

const router = express.Router();

router.post("/photos/:id/comments", (req, res) => {
  try {
    const id = req.params.id;
    const { name, comment, id: commentId } = req.body;

    const commentsFile = fs.readFileSync("./data/photos.json");
    const comments = JSON.parse(commentsFile);
    const commentIndividual = comments.find(
      (comment) => comment.id === id
    ).comments;

    const newComment = {
      id: commentId,
      name,
      comment,
      timestamp: new Date().toISOString(),
    };

    commentIndividual.push(newComment);

    fs.writeFileSync("./data/photos.json", JSON.stringify(comments, null, 2));

    res.status(201).json({
      message: "comment received",
      id,
      name,
      comment,
      commentId,
    });
  } catch (error) {
    console.log(error);
  }
});

export default router;
