import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
    content: {type: String, require: true},
    blogId:{type: mongoose.Schema.ObjectId, ref: "blogs"},
    blogCommentor: {type: mongoose.Schema.ObjectId, ref: "users"},
    commentDate:{type: Date, default: Date.now},
});

const commentModel = mongoose.model("comment",commentSchema);

export default commentModel;