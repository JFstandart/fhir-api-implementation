import { Schema } from "mongoose";
import { Coding } from "@medplum/fhirtypes";

const codingSchema = new Schema<Coding>(
  {
    system: { type: String },
    version: { type: String },
    code: { type: String },
    display: { type: String },
    userSelected: { type: Boolean },
  },
  { _id: false, timestamps: false }
);

export { codingSchema };
