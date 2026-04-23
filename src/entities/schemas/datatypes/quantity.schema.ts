import { Schema } from "mongoose";
import { Quantity } from "@medplum/fhirtypes";

const quantitySchema = new Schema<Quantity>(
  {
    value: { type: Number },
    comparator: {
      type: String,
      enum: ['<', '<=', '>=', '>'],
    },
    unit: { type: String },
    system: { type: String },
    code: { type: String },
  },
  { _id: false, timestamps: false }
);

export { quantitySchema };
