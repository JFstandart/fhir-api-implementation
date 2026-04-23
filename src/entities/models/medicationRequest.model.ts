import { model } from "mongoose";
import { MedicationRequest } from "../../definitions/medicationRequest.definition";
import { medicationRequestSchema } from "../schemas/medicationRequest.schema";

const MedicationRequestModel = model<MedicationRequest>("MedicationRequest", medicationRequestSchema);

export { MedicationRequestModel };
