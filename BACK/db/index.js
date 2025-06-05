import dotenv from "dotenv";
import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
// Load environment variables from .env file

dotenv.config({ path: "../../.env" });
const connectDB = async () => {
  try {
    const connectInstance = await mongoose.connect(
      `${process.env.MONGO_URI}/${DB_NAME}`
    );

    console.log(
      ` \n Database connected successfully to ${connectInstance.connection.host} \n`
    );
  } catch (error) {
    console.error("Database connection failed:", error);
    process.exit(1); // Exit the process with failure
  }
};

export default connectDB;
