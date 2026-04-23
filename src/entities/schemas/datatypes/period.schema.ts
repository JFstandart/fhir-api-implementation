import { Schema } from "mongoose";
import { Period } from "@medplum/fhirtypes";

const PeriodSchema = new Schema<Period>(
  {
    start: { type: String },
    end: { type: String },
  },
  { _id: false, timestamps: false }
);

export { PeriodSchema };
