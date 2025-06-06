import dotenv from "dotenv";
import express from "express";
import connectDB from "./db/index.js";
import path from "path";
import cors from "cors";

dotenv.config({ path: "../.env" }); // Load environment variables from .env file

const PORT = process.env.PORT;

const app = express();
app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

// Common Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send(`
    <h1 style="text-align: center; margin-top: 200px;">HMS Backend Running</h1>
  `);
});

//import routes
import healthcheckRoutes from "./routes/healthcheck.routes.js";

// Use routes
app.use("/api/v1/healthcheck", healthcheckRoutes);

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
