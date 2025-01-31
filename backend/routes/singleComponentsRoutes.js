import express from "express";
import {
  createComponent,
  deleteComponent,
  getAllComponents,
  getComponentById,
  updateComponent,
} from "../queries/singleComponent.js";

const router = express.Router();

router.get("/", getAllComponents);
router.get("/:id", getComponentById);
router.put("/:id", updateComponent);
router.delete("/:id", deleteComponent);
router.post("/new", createComponent);

export { router };
