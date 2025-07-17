import { Schema } from "mongoose";
import {
  ContactPoint,
  ContactPointSystemValues,
  ContactPointUseValues,
} from "../../../definitions/datatypes/contactPoint.datatype";
import { PeriodSchema } from "./period.schema";

const contactPointSchema = new Schema<ContactPoint>(
  {
    system: {
      type: String,
      enum: {
        values: ContactPointSystemValues,
        message: "`{VALUE}`, Invalid value for ContactPoint system",
      },
      required: false,
    },
    value: String,
    use: {
      type: String,
      enum: {
        values: ContactPointUseValues,
        message: "`{VALUE}`, Invalid value for ContactPoint use",
      },
      required: false,
    },
    rank: Number,
    period: PeriodSchema,
  },
  { _id: false, timestamps: false }
);

export { contactPointSchema };
