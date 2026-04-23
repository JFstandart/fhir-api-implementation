import { Router } from "express";
import { diagnosticReportController } from "../controllers/diagnosticReport.controller";

const router = Router();

router.get("/", diagnosticReportController.getAll);
router.get("/:id", diagnosticReportController.getById);
router.post("/", diagnosticReportController.create);
router.put("/:id", diagnosticReportController.update);
router.delete("/:id", diagnosticReportController.delete);

export default router;
