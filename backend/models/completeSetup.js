import mongoose from "mongoose";

const setupSchema = new mongoose.Schema({
  name: String,
  description: String,
  category: String,
  price: Number,
  image: String,
  ratings: String,
  stock: Number,
  components: [
    {
      name: String,
      description: String,
    },
  ],
});

const PcSetup = mongoose.model("complete_setups", setupSchema);

export default PcSetup;
