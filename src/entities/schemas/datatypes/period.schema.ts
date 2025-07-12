import { Schema } from "mongoose";
import { Period } from "../../../definitions/datatypes/period.datatype";

const PeriodSchema = new Schema<Period>(
  {
    start: { type: Date, required: true },
    end: { type: Date, required: true },
  },
  { _id: false, timestamps: false }
);

export { PeriodSchema };
