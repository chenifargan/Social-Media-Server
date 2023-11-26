const express = require("express");
const router = express.Router();
const { Comments } = require("../models");
const { validateToken } = require("../middlewares/AuthModdleware");

router.get("/:postId", async (req, res) => {
  const postId = req.params.postId;
  const comments = await Comments.findAll({ where: { PostId: postId } });
  res.json(comments);
});
//create comment for post
router.post("/", validateToken, async (req, res) => {
  const comment = req.body;
  const username = req.user.username;
  comment.username = username;
  await Comments.create(comment);
  res.json(comment);
});
router.delete("/:commentId", validateToken, async (req, res) => {
  const commentId = req.params.commentId;
  const co = await Comments.destroy({ where: { id: commentId } });
  if (!co) {
    res.json({ error: "Worng delete" });
  } else {
    res.json("delete succesfuly");
  }
});
module.exports = router;
