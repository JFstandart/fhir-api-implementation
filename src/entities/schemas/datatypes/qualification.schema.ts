import { Schema } from "mongoose";
import { PractitionerQualification } from "@medplum/fhirtypes";
import { codeableConceptSchema } from "./codeableConcept.schema";
import { PeriodSchema } from "./period.schema";

const qualificationSchema = new Schema<PractitionerQualification>(
  {
    identifier: { type: [Schema.Types.Mixed] },
    code: { type: codeableConceptSchema, required: true },
    period: { type: PeriodSchema },
    issuer: { type: Schema.Types.Mixed },
  },
  { _id: false, timestamps: false }
);

export { qualificationSchema };
