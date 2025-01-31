import mongoose from "mongoose";

const componentSchema = new mongoose.Schema({
  name: String,
  brand: String,
  description: String,
  price: Number,
  image: String,
  ratings: String,
  stock: Number,
});

const Components = mongoose.model("components", componentSchema);

export default Components;
