import mongoose from "mongoose";
import "dotenv/config";

const db = process.env.mongoURI;

const connectDB = async () => {
  try {
    await mongoose.connect(db);

    console.log("MongoDB connected");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

export default connectDB;