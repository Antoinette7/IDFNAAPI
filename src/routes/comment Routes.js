
import express from "express";
import { createComment } from "../controllers/commentController";

const CommentRoutes = express.Router();

CommentRoutes.post("/create", createComment);

export default CommentRoutes;