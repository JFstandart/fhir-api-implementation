import { AllergyIntoleranceModel } from "../entities/models/allergyIntolerance.model";
import { BaseController } from "./base.controller";
import { AllergyIntolerance } from "../definitions/allergyIntolerance.definition";

class AllergyIntoleranceController extends BaseController<AllergyIntolerance> {
  constructor() {
    super(AllergyIntoleranceModel, "AllergyIntolerance");
  }
}

export const allergyIntoleranceController = new AllergyIntoleranceController();
