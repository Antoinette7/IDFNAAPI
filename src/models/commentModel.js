import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  blog_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'blog',
  },
  author_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref:'user',
  },
});

const Comment = mongoose.model ("Comment", commentSchema);

export default  Comment;
