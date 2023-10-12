import express from "express";
import { 
    createBlog,
    etImportedData,
    delteData,
    updateData,
    getId,

} from "../controllers/BlogControllers";
import fileUpload from "../helper/multer";
import Authorization from "../middleware/Authorization";

const blogRoutes = express.Router();

blogRoutes.post("/create",Authorization, fileUpload.single("blogImage"), createBlog);
blogRoutes.get("/read", etImportedData);
blogRoutes.delete("/delete/:id", delteData);
blogRoutes.get("/read/:id" , getId);
blogRoutes.put("/update/:id",fileUpload.single("blogImage"),updateData);



export default blogRoutes;
