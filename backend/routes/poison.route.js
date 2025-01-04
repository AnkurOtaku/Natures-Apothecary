import express from "express";
import { createPoison, deletePoison, getPoisons, updatedPoison } from "../controllers/poison.controller.js";

const router = express.Router();

router.get("/", getPoisons);
router.post("/", createPoison);
router.put("/:id", updatedPoison);
router.delete("/:id", deletePoison);

export default router;