import mongoose from "mongoose";
const statusSchema = new mongoose.Schema({
  fname: {
    type: String,
    require: true,
  },
  lname: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  Age: {
    type: Number,
    require: false,
  },
});
const statusInfo = mongoose.model("information", statusSchema);
export default statusInfo;


