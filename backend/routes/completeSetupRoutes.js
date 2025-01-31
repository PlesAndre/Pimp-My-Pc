import express from "express";
import {
  createSetup,
  deleteSetup,
  getAllSetups,
  getSetupById,
  updateSetup,
} from "../queries/completeSetup.js";

const router = express.Router();

router.get("/", getAllSetups);
router.get("/:id", getSetupById);
router.put("/:id", updateSetup);
router.delete("/:id", deleteSetup);
router.post("/new", createSetup);

export { router };
