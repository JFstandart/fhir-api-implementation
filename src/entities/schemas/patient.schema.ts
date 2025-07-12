import { Schema } from "mongoose";
import { Patient } from "../../definitions/patient.definition";
import { humanNameSchema } from "./datatypes/humanName.schema";
import { contactPointSchema } from "./datatypes/contactPoint.schema";
import { GenderValues } from "../../definitions/terminologies/gender.terminology";

const PatientSchema = new Schema<Patient>({
  active: { type: Boolean, required: true },
  name: { type: [humanNameSchema], required: true },
  telecom: { type: [contactPointSchema], default: [] },
  gender: {
    type: String,
    enum: {
      values: GenderValues,
      message: "{VALUE} is not a valid gender",
    },
    required: true,
  },
  birthDate: { type: Date, required: true },
  deceased: { type: Schema.Types.Mixed, default: null }, // Can be boolean or Date
});
