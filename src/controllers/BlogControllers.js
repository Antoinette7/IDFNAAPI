import BlogModel from "../models/blogModel";
import { uploadToCloud } from "../helper/cloud";
//https://res.cloudinary.com/dskrteajn/image/upload/v1675271488/hznovwf7ksuylz9qcd6d.jpg

// create blog
export const createBlog = async (req, res) => {
  try {
    const { blogImage, title, content, coment,} = req.body;
    let result;
    if (req.file) result = await uploadToCloud(req.file, res);
    const blog = await BlogModel.create({
      blogImage:
        result?.secure_url ||
        "https://res.cloudinary.com/dskrteajn/image/upload/v1675271488/hznovwf7ksuylz9qcd6d.jpg",
      title,
      content,
      comment,
      author:req.users.lastname,
      authorP:req.users.profile
    });
    return res.status(200).json({
      message: "Your Blog uploaded Well",
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
export const etImportedData = async (req, res) =>{
  try {
    const blogPosts = await BlogModel.find();
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
"https://res.cloudinary.com/dx5hdez0h/image/upload/v1696595102/cld-sample.jpg",
title,
content,


});

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
const blogPost = await BlogModel.findById(id);
return res.status(200).json({
  status:"200",
  message:"imported post is available",
  data:blogPost,
});
  }
  catch(error){
    return res.status(500).json({
      status:"500",
      message:"this not found",
      error:error.message,
    });

  }
};
 