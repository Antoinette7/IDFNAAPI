import express from "express";
import {
    createComment,
} from "../controllers/commentController";

import Authorization from "../middleware/Authorization";
import fileUpload from "../helper/multer";

const commentRoutes = express.Router();
commentRoutes.post("/create/:blogId", Authorization, fileUpload.single("blogImage"), createComment);


export default commentRoutes 