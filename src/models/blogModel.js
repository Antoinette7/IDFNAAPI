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
  
  views: {
    type: Number,
    default: 0, // Initial view count is 0
  },
  blogDate:{
    type: Date, 
    default: Date.now
  },
  updateDate: { 
    type: Date,
     default: Date.now },

});

const BlogModel = mongoose.model("blogs", blogSchema);

export default BlogModel;
