import { Schema } from "mongoose";
import { AllergyIntolerance } from "../../definitions/allergyIntolerance.definition";
import { codeableConceptSchema } from "./datatypes/codeableConcept.schema";

const allergyIntoleranceSchema = new Schema<AllergyIntolerance>(
  {
    _id: { type: String, required: true },
    resourceType: { type: String, default: "AllergyIntolerance", required: true },
    clinicalStatus: codeableConceptSchema,
    verificationStatus: codeableConceptSchema,
    type: [codeableConceptSchema],
    category: [{ type: String }],
    criticality: { type: String },
    code: codeableConceptSchema,
    patient: {
      reference: { type: String, required: true },
    },
    encounter: {
      reference: { type: String },
    },
    onsetDateTime: { type: String },
    recordedDate: { type: String },
    recorder: { type: Schema.Types.Mixed },
    note: [{ text: String }],
    reaction: [
      {
        substance: codeableConceptSchema,
        manifestation: [codeableConceptSchema],
        description: { type: String },
        onset: { type: String },
        severity: { type: String },
      },
    ],
  },
  { timestamps: true }
);

export { allergyIntoleranceSchema };
