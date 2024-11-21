import express from "express";
import { createRemedy, deleteRemedy, getRemedies, updatedRemedy } from "../controllers/remedy.controller.js";

const router = express.Router();

router.get("/", getRemedies);
router.post("/", createRemedy);
router.put("/:id", updatedRemedy);
router.delete("/:id", deleteRemedy);

export default router;