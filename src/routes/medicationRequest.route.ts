import { Router } from "express";
import { medicationRequestController } from "../controllers/medicationRequest.controller";

const router = Router();

router.get("/", medicationRequestController.getAll);
router.get("/:id", medicationRequestController.getById);
router.post("/", medicationRequestController.create);
router.put("/:id", medicationRequestController.update);
router.delete("/:id", medicationRequestController.delete);

export default router;
