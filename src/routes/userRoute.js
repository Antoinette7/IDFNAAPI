import express from "express";
import fileUpload from "../helper/multer";
import {
    signup,
    login,
    getalluser,
    deletuser,
    updateData,
    
} from "../controllers/useCntrollers";
const userRoutes = express.Router();
userRoutes.delete("/delete/:id", deletuser);
userRoutes.get("/read",getalluser);
userRoutes.post("/signup", fileUpload.single("profile"),signup);
userRoutes.post("/login", fileUpload.single("profile"),login);
userRoutes.put("/update/:id" ,fileUpload.single("profile"), updateData);
export default userRoutes;
