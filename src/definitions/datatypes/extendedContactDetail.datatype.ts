import { Organization } from "../organization.definition";
import { Address } from "./address.datatype";
import { ContactPoint } from "./contactPoint.datatype";
import { HumanName } from "./humanName.datatype";
import { Period } from "./period.datatype";

export interface ExtendedContactDetail {
  purpose?: string; // Purpose of the contact detail
  name?: HumanName[]; // Name of the contact person
  telecom?: ContactPoint[]; // Contact points for the person
  address?: Address; // Address of the contact person
  organization?: Organization; // Organization associated with the contact
  period?: Period; // Period during which the contact is valid
}
