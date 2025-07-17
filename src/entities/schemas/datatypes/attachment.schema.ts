import { Schema } from "mongoose";
import { Attachment } from "../../../definitions/datatypes/attachment.datatype";

const attachmentSchema = new Schema<Attachment>(
  {
    contentType: { type: String, required: true },
    language: { type: String },
    data: { type: String },
    url: { type: String },
    size: { type: Number },
    hash: { type: String },
    title: { type: String },
    creation: { type: Date },
    height: { type: Number },
    width: { type: Number },
    frames: { type: Number },
    duration: { type: Number },
    pages: { type: Number },
  },
  { _id: false, timestamps: false }
);

export { attachmentSchema };
