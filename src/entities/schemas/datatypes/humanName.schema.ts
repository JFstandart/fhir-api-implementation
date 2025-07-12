import { Schema } from "mongoose";
import {
  HumanName,
  HumanNameUseValues,
} from "../../../definitions/datatypes/humanName.datatype";
import { PeriodSchema } from "./period.schema";

const humanNameSchema = new Schema<HumanName>(
  {
    use: {
      type: String,
      enum: {
        values: HumanNameUseValues,
        message: "`{VALUE}`, Invalid value for HumanName use",
      },
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
