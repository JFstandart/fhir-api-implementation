import { Router } from "express";
import {
  getObservations,
  getObservationById,
  createObservation,
  updateObservation,
  deleteObservation,
} from "../controllers/observation.controller";

const router = Router();

router.get("/", getObservations);
router.get("/:id", getObservationById);
router.post("/", createObservation);
router.put("/:id", updateObservation);
router.delete("/:id", deleteObservation);

export default router;
