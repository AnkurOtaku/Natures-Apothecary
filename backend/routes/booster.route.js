import express from "express";
import { createBooster, deleteBooster, getBoosters, updatedBooster } from "../controllers/booster.controller.js";

const router = express.Router();

router.get("/", getBoosters);
router.post("/", createBooster);
router.put("/:id", updatedBooster);
router.delete("/:id", deleteBooster);

export default router;