import { Schema, model } from "mongoose";

// Define Blog Post Schema
const blogPostSchema = new Schema({
  title: {
    type: String,
    required: true,
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
  datePosted: {
    type: Date,
    default: Date.now,
  },
});

// Create Blog Post Model
const BlogPost = model("BlogPost", blogPostSchema);

// Export the model to use it in other files
export default BlogPost;
