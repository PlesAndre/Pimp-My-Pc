import mongoose from "mongoose";
import "dotenv/config";

console.log(process.env.MY_SERVER_URI);

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.MY_SERVER_URI);
    console.log(`MongoDB connesso: ${connect.connection.host}`);
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
