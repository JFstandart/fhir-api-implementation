import { Router } from "express";
import { allergyIntoleranceController } from "../controllers/allergyIntolerance.controller";

const router = Router();

router.get("/", allergyIntoleranceController.getAll);
router.get("/:id", allergyIntoleranceController.getById);
router.post("/", allergyIntoleranceController.create);
router.put("/:id", allergyIntoleranceController.update);
router.delete("/:id", allergyIntoleranceController.delete);

export default router;
