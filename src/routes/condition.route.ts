import { Router } from "express";
import {
  getConditions,
  getConditionById,
  createCondition,
  updateCondition,
  deleteCondition,
} from "../controllers/condition.controller";

const router = Router();

router.get("/", getConditions);
router.get("/:id", getConditionById);
router.post("/", createCondition);
router.put("/:id", updateCondition);
router.delete("/:id", deleteCondition);

export default router;
