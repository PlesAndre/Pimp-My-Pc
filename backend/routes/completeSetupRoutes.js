import express from "express";
import {
  createSetup,
  getAllSetups,
  getSetupById,
} from "../queries/completeSetup.js";

const router = express.Router();

router.get("/", getAllSetups);
router.get("/:id", getSetupById);
router.post("/new", createSetup);

export { router };
