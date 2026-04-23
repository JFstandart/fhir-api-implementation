import { Schema } from "mongoose";
import { Attachment } from "@medplum/fhirtypes";

const attachmentSchema = new Schema<Attachment>(
  {
    contentType: { type: String },
    language: { type: String },
    data: { type: String },
    url: { type: String },
    size: { type: Number },
    hash: { type: String },
    title: { type: String },
    creation: { type: String },
  },
  { _id: false, timestamps: false }
);

export { attachmentSchema };
