import { Schema } from "mongoose";
import { MedicationRequest } from "../../definitions/medicationRequest.definition";
import { codeableConceptSchema } from "./datatypes/codeableConcept.schema";

const medicationRequestSchema = new Schema<MedicationRequest>(
  {
    _id: { type: String, required: true },
    resourceType: { type: String, default: "MedicationRequest", required: true },
    status: { type: String, required: true },
    intent: { type: String, required: true },
    category: [codeableConceptSchema],
    priority: { type: String },
    doNotPerform: { type: Boolean },
    medicationCodeableConcept: codeableConceptSchema,
    medicationReference: { type: Schema.Types.Mixed },
    subject: {
      reference: { type: String, required: true },
    },
    encounter: {
      reference: { type: String },
    },
    supportingInformation: [{ type: Schema.Types.Mixed }],
    authoredOn: { type: String },
    requester: { type: Schema.Types.Mixed },
    reasonCode: [codeableConceptSchema],
    reasonReference: [{ type: Schema.Types.Mixed }],
    dosageInstruction: [{ type: Schema.Types.Mixed }],
  },
  { timestamps: true }
);

export { medicationRequestSchema };
