import { Schema } from "mongoose";
import { ContactDetail } from "@medplum/fhirtypes";
import { contactPointSchema } from "./contactPoint.schema";

const contactDetailSchema = new Schema<ContactDetail>(
  {
    name: { type: String },
    telecom: [contactPointSchema],
  },
  { _id: false, timestamps: false }
);

export { contactDetailSchema as extendedContactDetailSchema };
