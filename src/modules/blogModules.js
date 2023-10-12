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
  coment: {
    type: String,
    require: false,
  },
  author:{
    type: String,
    require:false

  },
  authorP: {
    type: String,
    require:false,
  },
});

const BlogModel = mongoose.model("blog", blogSchema);

export default BlogModel;
