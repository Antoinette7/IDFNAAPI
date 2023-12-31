import BlogModel from "../models/blogModel";
import Users from "../models/userModel";
import { uploadToCloud } from "../helper/cloud";
//https://res.cloudinary.com/dx5hdez0h/image/upload/v1697568266/pjqdfdjfg1qtjhwk0btr.jpg

// create blog
export const createBlog = async (req, res) => {
  try {
    const user = req.Users
    const { blogImage, title, content,} = req.body;
    const checkTitle = await BlogModel.findOne({title});
    if(checkTitle){
      return res.status(400).json({
        status: "400",
        message: "Title exists in database",
      })
    };
    let result;
    if (req.file) result = await uploadToCloud(req.file, res);
    const blog = await BlogModel.create({
      blogImage:
        result?.secure_url ||
        "https://res.cloudinary.com/dx5hdez0h/image/upload/v1697568266/pjqdfdjfg1qtjhwk0btr.jpg",
      title,
      content,
      user: user._id,
    });
    return res.status(200).json({
      message: "Your Blog created Well",
      data: blog,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Failed",
      error: error.message,
    });
  }
};
// read blog
export const getAllBlogs = async (req, res) =>{
  try {
    const blogPosts = await BlogModel.find().populate({path: "Comment", populate:{path: "blogCommentor", select: "firstname lastname email profile"}})

    .populate({path: "user",select:"firstname lastname email profile"});


    return res.status(200).json({
      message: "Blog posts imported successfully",
      data: blogPosts,
    
    });
  } catch (error) {
    return res.status(500).json({
      message: "Failed to import blog posts",
      error: error.message,
    });
  }
}
//delete
export const delteData =async (req, res)=> {
  try {
    const {id} = req.params;
    const blog = await BlogModel.findById(id);
    if (!blog) 
      return res.status(404).json({
        message: "Blog post not found",
      });
      const deletedata = await BlogModel.findByIdAndDelete(id);
      return res.status(200).json({
        message: "Blog post deleted successfully",
      });
    
  
  } catch (error) {
    return res.status(500).json({
      message: "Failed to delete blog post",
      error: error.message,
    });
  }
}

// update
export const updateData = async(req, res) =>{
  try {
    const { blogImage, title, content, } = req.body;
    const {id}= req.params;
    const blog = await  BlogModel.findById(id);
    if (!blog) 
      return res.status(404).json({
        message: "Blog post not found",
        status:"404",
      });
      let result;
      if(req.file) result = await uploadToCloud(req.file, res);
    const updatee = await BlogModel.findByIdAndUpdate(id,{


blogImage: result?.secure_url ||
"https://res.cloudinary.com/dx5hdez0h/image/upload/v1697568266/pjqdfdjfg1qtjhwk0btr.jpg",
title,
content,
});
console.log("Blog updated on:", updatee.updateDate);

    return res.status(200).json({
      message: "Blog post updated successfully",
      data: updatee,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Failed to update blog post",
      error: error.message,
    });
  }
};

//get one id
export const getId = async (req, res) =>{
    
  try{
    const {id}= req.params;
const blogPost = await BlogModel.findById(id).populate({path: "Comment", populate:{path: "blogCommentor", select: "firstname lastname email profile"}})

.populate({path: "user",select:"firstname lastname email profile"});

// Increment the view count
  blogPost.views += 1;
  await blogPost.save();


return res.status(200).json({
  status:"200",
  message:"imported post is available",
  data:blogPost,
});
  }
  
catch(error){
    return res.status(500).json({
      status:"500",
      message:"this blognot found",
      error:error.message,
    });

  }
};

