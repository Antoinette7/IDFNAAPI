import express from "express";
import {
    createComment,
    getComments,
    commentdelete,
} from "../controllers/commentController";

import Authorization from "../middleware/Authorization";
import fileUpload from "../helper/multer";

const commentRoutes = express.Router();

commentRoutes.post("/create/:blogId", Authorization, fileUpload.single("blogImage"), createComment);

commentRoutes.get('/read', getComments );

commentRoutes.delete("/delete/:id", commentdelete);


export default commentRoutes 