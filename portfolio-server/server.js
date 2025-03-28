"use strict";

// Mitchell Saremba - 2025

import express from "express"; // For handling req/res
import os from "os"; // For system information
import nodemailer from "nodemailer"; // Allows easy email sending
import cors from "cors"; // Allows frontend to interact with backend
import dotenv from "dotenv"; // Loads env variables
import path from "path"; // Helps manage file paths
import mongoose from "mongoose";
import { fileURLToPath } from "url";
import BlogPost from "./models/blogPost.js";

// Load .env variables
dotenv.config();

/***
 * Create an instance of Express
 * Used to define routes/handle requests/etc
 */
const app = express();

// MongoDB Connection
// const dbURI =
//   "mongodb+srv://msar:tWfclXsi9kQH3mAB@cluster0.inp7k2d.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// mongoose
//   .connect(dbURI)
//   .then(() => console.log("MongoDB Connected"))
//   .catch((err) => console.log(err));

// Middleware
app.use(cors()); // Allow cross-origin requests (frontend <--> backend)
app.use(express.json()); // Parse JSON bodies

// Get directory for ES6 module compatibility
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// // Serve files from frontend
app.use(express.static(path.join(__dirname, "../portfolio")));

/***
 * Configure email
 * Transporter is an email sender - in this case using gmail
 */
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.APP_PASSWORD, // Gmail App Password
  },
});

/***
 * Defines a GET API route at /api/blog
 */
app.get("/blog", async (req, res) => {
  try {
    const posts = await BlogPost.find().sort({ datePosted: -1 });
    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

/***
 * Defines a POST API route at /api/contact
 */
app.post("/api/contact", async (req, res) => {
  // Get values from frontend
  const { name, email, message } = req.body;

  console.log(req.body);
  console.log(name, email, message);

  try {
    // Make sure everything is provided
    if (!name || !email || !message) {
      return res.status(400).json({ error: "All fields are required" });
    }

    console.log(name, email, message);

    // Send email via nodemailer
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Send to yourself
      subject: `Portfolio Inquiry From: ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `,
    });

    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Failed to send email" });
  }
});

/***
 * Serves index.html for all routes
 * "*" - Catches all routes that aren't API requests and serves index.html
 */
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../portfolio", "index.html"));
});

// Use the PORT from .env or default to 3000
const PORT = process.env.PORT || 3000;

/***
 * Gets the local IP that the server is being hosted on
 * If it's not available, defaults to 'localhost'
 */
const getLocalIp = () => {
  const interfaces = os.networkInterfaces();
  for (const i of Object.values(interfaces)) {
    for (const config of i) {
      if (config.family === "IPv4" && !config.internal) {
        return config.address;
      }
    }
  }
  return "localhost";
};

// Start up the express server
app.listen(PORT, () => {
  console.log(`
    ┌──────────────────────────────────────┐
    │  Server running at:                  │
    │  - Local:   http://localhost:${PORT}    │
    │  - Network: http://${getLocalIp()}:${PORT}│
    └──────────────────────────────────────┘
    `);
});
