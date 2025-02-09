import mongoose from "mongoose";

const newUserSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  email: String,
  password: String,
});

const User = mongoose.model("users", newUserSchema);

export default User;
