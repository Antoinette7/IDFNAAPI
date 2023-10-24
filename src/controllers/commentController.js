import CommentModel from "../models/commentModel";
import BlogModel from "../models/blogModel";
import Users from "../models/userModel";

// Function to create a comment
export const createComment = async (req, res) => {
  try {
    const {blogId} = req.params;
    const user = req.Users;
    const checkBlog = await BlogModel.findById(blogId);
    if(!checkBlog){
      return res.status(404).json({
        status:"404",
        message: "Blog not found"
      });
    }
    // Extract the necessary data from the request body
    const { content} = req.body;
    


    // Create the comment on blog
    // Create the comment on blog
    const comment = await CommentModel.create({
      blogId, 
      content,
      blogCommentor: user._id,
     });

     const updateBlog = await BlogModel.findByIdAndUpdate(
      blogId,
      {$push: { Comment: comment._id } },
      {new: true}
      );
         
    return res.status(201).json({
      status: "201",
      message: "Comment added Successfully",
      data: comment,
    });
  } catch (error) {
    return res.status(500).json({
      status: "500",
      message: "Failed To add a Comment",
      error: error.message,
    });
  }
};
