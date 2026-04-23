import { MedicationRequestModel } from "../entities/models/medicationRequest.model";
import { BaseController } from "./base.controller";
import { MedicationRequest } from "../definitions/medicationRequest.definition";

class MedicationRequestController extends BaseController<MedicationRequest> {
  constructor() {
    super(MedicationRequestModel, "MedicationRequest");
  }
}

export const medicationRequestController = new MedicationRequestController();
