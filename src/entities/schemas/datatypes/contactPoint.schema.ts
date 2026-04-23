import { Schema } from "mongoose";
import { ContactPoint } from "@medplum/fhirtypes";
import { PeriodSchema } from "./period.schema";

const contactPointSchema = new Schema<ContactPoint>(
  {
    system: {
      type: String,
      enum: ['phone', 'fax', 'email', 'pager', 'url', 'sms', 'other'],
    },
    value: { type: String },
    use: {
      type: String,
      enum: ['home', 'work', 'temp', 'old', 'mobile'],
    },
    rank: { type: Number },
    period: PeriodSchema,
  },
  { _id: false, timestamps: false }
);

export { contactPointSchema };
