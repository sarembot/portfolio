const express = require("express");
const router = express.Router();
const Post = require("../models/BlogPost");

// Get all published blog posts
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find({ published: true })
      .sort({ createdAt: -1 })
      .limit(10);
    res.render("blog/index", { posts });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get a single blog post by slug
router.get("/:slug", async (req, res) => {
  try {
    const post = await Post.findOne({ slug: req.params.slug });
    if (!post) {
      return res.status(404).render("404");
    }
    res.render("blog/post", { post });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Admin routes for creating and managing posts would go here
// These should be protected with authentication

module.exports = router;
