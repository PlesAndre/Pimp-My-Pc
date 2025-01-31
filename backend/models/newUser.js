import mongoose from "mongoose";

const newUserSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  role: String,
});

const NewUser = mongoose.model("users", newUserSchema);

export default NewUser