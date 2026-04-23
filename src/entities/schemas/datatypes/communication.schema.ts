import { Schema } from "mongoose";
import { PatientCommunication } from "@medplum/fhirtypes";
import { codeableConceptSchema } from "./codeableConcept.schema";

const communicationSchema = new Schema<PatientCommunication>(
  {
    language: { type: codeableConceptSchema, required: true },
    preferred: { type: Boolean },
  },
  { _id: false, timestamps: false }
);

export { communicationSchema };
