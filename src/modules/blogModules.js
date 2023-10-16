import mongoose from "mongoose";

const { ObjectId } = mongoose.Schema;

const commentSchema = new mongoose.Schema({
  UserComment: String,
  CommentedBy: { type: ObjectId, ref: "userSchema" },
  CommentDate: { type: Date, default: Date.now }
});
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
  
  comments: [commentSchema] // Added comments array using the commentSchema
});

const BlogModel = mongoose.model("blog", blogSchema);

export default BlogModel;
