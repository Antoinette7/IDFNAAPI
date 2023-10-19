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
