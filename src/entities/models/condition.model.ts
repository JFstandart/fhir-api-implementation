import { model } from "mongoose";
import { Condition } from "../../definitions/condition.definition";
import { conditionSchema } from "../schemas/condition.schema";

const ConditionModel = model<Condition>("Condition", conditionSchema);

export { ConditionModel };
