import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

export const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGODB_URL);
    console.log("MongoDB connected successfully: ", connect.connection.host);
  } catch (error) {
    console.error("MongoDB connection failed:", error);
    process.exit(1); // 1 status code means failure, 0 means success
  }
};
