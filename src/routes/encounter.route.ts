import { Router } from "express";
import {
  getEncounters,
  getEncounterById,
  createEncounter,
  updateEncounter,
  deleteEncounter,
} from "../controllers/encounter.controller";

const router = Router();

router.get("/", getEncounters);
router.get("/:id", getEncounterById);
router.post("/", createEncounter);
router.put("/:id", updateEncounter);
router.delete("/:id", deleteEncounter);

export default router;
