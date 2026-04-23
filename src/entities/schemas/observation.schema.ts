import { Schema } from "mongoose";
import { Observation } from "../../definitions/observation.definition";
import { codeableConceptSchema } from "./datatypes/codeableConcept.schema";
import { quantitySchema } from "./datatypes/quantity.schema";
import { ObservationStatusValues } from "../../definitions/terminologies";

const observationSchema = new Schema<Observation>(
  {
    _id: { type: String, required: true },
    resourceType: { type: String, default: "Observation", required: true },
    status: {
      type: String,
      enum: {
        values: ObservationStatusValues,
        message: "{VALUE} is not a valid observation status",
      },
      required: true,
    },
    category: { type: [codeableConceptSchema], default: [] },
    code: { type: codeableConceptSchema, required: true },
    subject: {
      reference: { type: String, required: true },
      type: { type: String, default: "Patient" },
    },
    effectiveDateTime: { type: String },
    valueQuantity: quantitySchema,
    note: [{ text: String }],
  },
  { timestamps: true }
);

observationSchema.index({ "subject.reference": 1 });
observationSchema.index({ "category.coding.code": 1 });
observationSchema.index({ effectiveDateTime: -1 });

export { observationSchema };
