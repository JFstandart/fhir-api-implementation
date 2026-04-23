import { Schema } from "mongoose";
import { Address } from "@medplum/fhirtypes";
import { PeriodSchema } from "./period.schema";

const addressSchema = new Schema<Address>(
  {
    use: {
      type: String,
      enum: ['home', 'work', 'temp', 'old', 'billing'],
    },
    type: {
      type: String,
      enum: ['postal', 'physical', 'both'],
    },
    text: { type: String },
    line: { type: [String] },
    city: { type: String },
    district: { type: String },
    state: { type: String },
    postalCode: { type: String },
    country: { type: String },
    period: PeriodSchema,
  },
  { _id: false, timestamps: false }
);

export { addressSchema };
