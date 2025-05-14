const mongoose = require("mongoose");

// Define Blog Post Schema
const BlogPostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  slug: {
    type: String,
    required: true,
    unique: true,
  },
  author: {
    type: String,
    required: true,
    default: "Mitchell Saremba",
  },
  content: {
    type: String,
    required: true,
  },
  featuredImage: {
    type: String,
    default: "",
  },
  excerpt: {
    type: String,
  },
  tags: [String],
  published: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("blogPost", BlogPostSchema);
