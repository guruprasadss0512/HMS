import dotenv from "dotenv";
import express from "express";
import connectDB from "./db/index.js";
import path from "path";

dotenv.config({ path: "../.env" }); // Load environment variables from .env file

const PORT = process.env.PORT;

const app = express();
app.get("/", (req, res) => {
  res.send(`
    <h1 style="text-align: center; margin-top: 200px;">HMS Backend Running</h1>
  `);
});

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
    console.log("Database connected successfully");
  })
  .catch((error) => {
    console.error("Database connection failed:", error);
  });
