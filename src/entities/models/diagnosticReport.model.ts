import { model } from "mongoose";
import { DiagnosticReport } from "../../definitions/diagnosticReport.definition";
import { diagnosticReportSchema } from "../schemas/diagnosticReport.schema";

const DiagnosticReportModel = model<DiagnosticReport>("DiagnosticReport", diagnosticReportSchema);

export { DiagnosticReportModel };
