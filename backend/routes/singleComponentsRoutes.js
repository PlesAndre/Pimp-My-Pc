import express from "express";
import {
  createComponent,
  getAllComponents,
  getComponentById,
} from "../queries/singleComponent.js";

const router = express.Router();

router.get("/", getAllComponents);
router.get("/:id", getComponentById);
router.post("/new", createComponent);

export { router };
