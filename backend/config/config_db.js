import mongoose from "mongoose";
import "dotenv/config";

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.MY_SERVER_URI);
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
