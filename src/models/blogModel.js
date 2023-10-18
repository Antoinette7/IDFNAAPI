import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user', // Assuming you have a User model, reference it here
  },
  // You can add other comment-related fields here (e.g., timestamp, likes, etc.).
},{timestamp:true,

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
 
  author:{
    type: String,
    require:false

  },
  authorP: {
    type: String,
    require:false,
  },
  comment: [commentSchema], // This is an array of comment objects.
});

const BlogModel = mongoose.model("blog", blogSchema);

export default BlogModel;
