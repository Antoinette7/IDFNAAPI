import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
  firstname: {
    type: String,
    require: true,
  },
  lastname: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  profile:{
    type: String,
    require: true,
  },
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
  },
});
//git any change

const users = mongoose.model("users", userSchema);
export default users;