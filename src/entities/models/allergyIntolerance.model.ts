import { model } from "mongoose";
import { AllergyIntolerance } from "../../definitions/allergyIntolerance.definition";
import { allergyIntoleranceSchema } from "../schemas/allergyIntolerance.schema";

const AllergyIntoleranceModel = model<AllergyIntolerance>("AllergyIntolerance", allergyIntoleranceSchema);

export { AllergyIntoleranceModel };
