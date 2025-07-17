import { Schema } from "mongoose";
import { Qualification } from "../../../definitions/datatypes/qualification.datatype";
import { PeriodSchema } from "./period.schema";

const qualificationSchema = new Schema<Qualification>({
  _id: { type: String, required: true },
  code: { type: String, required: true },
  period: { type: PeriodSchema },
  issuer: { type: Schema.Types.ObjectId, ref: "Organization" },
}, { timestamps: false });

export { qualificationSchema };
