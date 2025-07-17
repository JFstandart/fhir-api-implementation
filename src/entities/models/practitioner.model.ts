import { model } from "mongoose";
import { Practitioner } from "../../definitions/practitioner.definition";
import { practitionerSchema } from "../schemas/practitioner.schema";

const PractitionerModel = model<Practitioner>(
  "Practitioner",
  practitionerSchema,
  "practitioners"
);

export { PractitionerModel };
