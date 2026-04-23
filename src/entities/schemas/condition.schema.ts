import { Schema } from "mongoose";
import { Condition } from "../../definitions/condition.definition";
import { codeableConceptSchema } from "./datatypes/codeableConcept.schema";
import { ConditionClinicalStatusValues } from "../../definitions/terminologies";

const conditionSchema = new Schema<Condition>(
  {
    _id: { type: String, required: true },
    resourceType: { type: String, default: "Condition", required: true },
    clinicalStatus: {
      type: String,
      enum: ConditionClinicalStatusValues,
    },
    verificationStatus: {
      type: String,
    },
    category: { type: [codeableConceptSchema], default: [] },
    code: { type: codeableConceptSchema, required: true },
    subject: {
      reference: { type: String, required: true },
      type: { type: String, default: "Patient" },
    },
    recordedDate: { type: String },
  },
  { timestamps: true }
);

conditionSchema.index({ "subject.reference": 1 });
conditionSchema.index({ clinicalStatus: 1 });

export { conditionSchema };
