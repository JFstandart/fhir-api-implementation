import { Schema } from "mongoose";
import { Communication } from "../../../definitions/datatypes/communication.datatype";
import { CommonLanguagesValues } from "../../../definitions/terminologies/commonLanguages.terminology";

const communicationSchema = new Schema<Communication>(
  {
    language: {
      type: String,
      enum: {
        values: CommonLanguagesValues,
        message: "`{VALUE}`, Invalid value for Communication language",
      },
      required: true,
    },
    preferred: { type: Boolean },
  },
  { _id: false, timestamps: false }
);

export { communicationSchema };
