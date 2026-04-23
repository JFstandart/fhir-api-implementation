import { Schema } from "mongoose";
import { HumanName } from "@medplum/fhirtypes";
import { PeriodSchema } from "./period.schema";

const humanNameSchema = new Schema<HumanName>(
  {
    use: {
      type: String,
      enum: ['usual', 'official', 'temp', 'nickname', 'anonymous', 'old', 'maiden'],
      required: false,
    },
    text: { type: String, required: true },
    family: { type: String, required: true },
    given: { type: [String], required: true },
    prefix: { type: [String] },
    suffix: { type: [String] },
    period: PeriodSchema,
  },
  { _id: false, timestamps: false }
);

export { humanNameSchema };
