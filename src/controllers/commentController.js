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

// function to retrive all comment 
export const getComments = async (req, res) => {
  try {
    const comments = await CommentModel.find();

    return res.status(200).json({
      status: "200",
      message: "Comments retrieved successfully",
      data: comments,
    });
  } catch (error) {
    return res.status(500).json({
      status: "500",
      message: "Failed to retrieve comments",
      error: error.message,
    });
  }
};

//delete
export const commentdelete =async (req, res)=> {
  try {
    const {id} = req.params;
    const comment = await CommentModel.findById(id);
    if (!comment) 
      return res.status(404).json({
        message: "comment not found",
      });
      const commentdeleting = await CommentModel.findByIdAndDelete(id);
      return res.status(200).json({
        message: "comment  deleted successfully",
      });
    
  
  } catch (error) {
    return res.status(500).json({
      message: "Failed to delete comment",
      error: error.message,
    });
  }
}