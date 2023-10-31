import express from "express";
import userAutho from "../middleware/userauthorization";
import {
    createComment,
    getComments,
    commentdelete,
} from "../controllers/commentController";

import fileUpload from "../helper/multer";

const commentRoutes = express.Router();

commentRoutes.post("/create/:blogId",userAutho, fileUpload.single("blogImage"), createComment);

commentRoutes.get('/read', getComments );

commentRoutes.delete("/delete/:id", commentdelete);

export default commentRoutes 