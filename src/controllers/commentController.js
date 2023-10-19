// In your comment controller or route
import Comment from '../models/commentModel';
import BlogModel from '../models/blogModel';

export const createComment = async (req, res) => {
  try {
    const { text,blog_id, author } = req.body;
    const newComment = await Comment.create({ text, author });

    
    const blogId = req.params.blogId;
    const blog = await BlogModel.findById(blogId);

    if (!blog) {
      return res.status(404).json({ status: "404", message: "Blog not found" });
    }
    blog.comments.push(newComment._id);
    await blog.save();

    return res.status(201).json({ status: "201", message: "Comment Created Successfully", data: newComment });
  } catch (error) {
    return res.status(500).json({ status: "500", message: "Failed to create comment", error: error.message });
  }
};
