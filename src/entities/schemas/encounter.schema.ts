import { Schema } from "mongoose";
import { Encounter } from "../../definitions/encounter.definition";
import { codingSchema } from "./datatypes/coding.schema";
import { codeableConceptSchema } from "./datatypes/codeableConcept.schema";
import { PeriodSchema } from "./datatypes/period.schema";
import { EncounterStatusValues } from "../../definitions/terminologies";

const encounterSchema = new Schema<Encounter>(
  {
    _id: { type: String, required: true },
    resourceType: { type: String, default: "Encounter", required: true },
    status: {
      type: String,
      enum: EncounterStatusValues,
      required: true,
    },
    class: [codingSchema],
    subject: {
      reference: { type: String, required: true },
    },
    period: PeriodSchema,
    reasonCode: [codeableConceptSchema],
  },
  { timestamps: true }
);

encounterSchema.index({ "subject.reference": 1 });
encounterSchema.index({ status: 1 });

export { encounterSchema };
