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
  posts:[{type: mongoose.Schema.ObjectId, ref: "blogs"}]
});
//git any change

const Users = mongoose.model("users", userSchema);
export default Users;