import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
  blogImage: {
    type: String,
    require: true,
  },
  title: {
    type: String,
    require: true,
  },
  content: {
    type: String,
    require: true,
  },
  user: {type: mongoose.Schema.ObjectId, ref: "users"},
  Comment:[{
  type: mongoose.Schema.ObjectId,
  ref: "comment",

  }],

});

const BlogModel = mongoose.model("blogs", blogSchema);

export default BlogModel;
