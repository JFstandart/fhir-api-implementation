import { DiagnosticReportModel } from "../entities/models/diagnosticReport.model";
import { BaseController } from "./base.controller";
import { DiagnosticReport } from "../definitions/diagnosticReport.definition";

class DiagnosticReportController extends BaseController<DiagnosticReport> {
  constructor() {
    super(DiagnosticReportModel, "DiagnosticReport");
  }
}

export const diagnosticReportController = new DiagnosticReportController();
