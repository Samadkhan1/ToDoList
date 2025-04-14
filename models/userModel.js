import mongoose from "mongoose";

const TODOschema = new mongoose.Schema({
  name: String,
});
const model = mongoose.model("todo", TODOschema);

export default model