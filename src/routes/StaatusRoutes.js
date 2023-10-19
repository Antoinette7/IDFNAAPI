import express from "express";
import {
  createInfo,
  deleteInfo,
  getAll,
  getOne,
  updatInfo,
} from "../controllers/StatusController";

const statusRoutes = express.Router();

statusRoutes.post("/create", createInfo);
statusRoutes.get("/read", getAll);
statusRoutes.get("/read/:id", getOne);
statusRoutes.delete("/delete/:id", deleteInfo);
statusRoutes.put("/update/:id", updatInfo);

export default statusRoutes;
