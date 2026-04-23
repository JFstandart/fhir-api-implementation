import { Schema } from "mongoose";
import { DiagnosticReport } from "../../definitions/diagnosticReport.definition";
import { codeableConceptSchema } from "./datatypes/codeableConcept.schema";
import { attachmentSchema } from "./datatypes/attachment.schema";

const diagnosticReportSchema = new Schema<DiagnosticReport>(
  {
    _id: { type: String, required: true },
    resourceType: { type: String, default: "DiagnosticReport", required: true },
    status: { type: String, required: true },
    category: [codeableConceptSchema],
    code: { type: codeableConceptSchema, required: true },
    subject: {
      reference: { type: String, required: true },
    },
    encounter: {
      reference: { type: String },
    },
    effectiveDateTime: { type: String },
    issued: { type: String },
    performer: [{ type: Schema.Types.Mixed }],
    result: [{ type: Schema.Types.Mixed }],
    conclusion: { type: String },
    conclusionCode: [codeableConceptSchema],
    presentedForm: [attachmentSchema],
  },
  { timestamps: true }
);

export { diagnosticReportSchema };
