import { Organization } from "../organization.definition";
import { Period } from "./period.datatype";

export interface Qualification {
  _id: string;
  code: string; //TODO: this should be a CodeableConcept
  period?: Period; // Period during which the qualification is valid
  issuer?: Organization; // Organization that issued the qualification
}
