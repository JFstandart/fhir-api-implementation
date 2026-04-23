import { Schema } from "mongoose";
import { CodeableConcept } from "@medplum/fhirtypes";
import { codingSchema } from "./coding.schema";

const codeableConceptSchema = new Schema<CodeableConcept>(
  {
    coding: { type: [codingSchema], default: [] },
    text: { type: String },
  },
  { _id: false, timestamps: false }
);

export { codeableConceptSchema };
