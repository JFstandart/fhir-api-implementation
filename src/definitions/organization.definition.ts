import { CodeableConcept } from "./structures/codeableConcept.structure";
import { ExtendedContactDetail } from "./datatypes/extendedContactDetail.datatype";
import { Period } from "./datatypes/period.datatype";
import { Endpoint } from "./endpoint.definition";
import { OrganizationType } from "./terminologies/organizationType.terminology";
import { Qualification } from "./datatypes/qualification.datatype";

export interface Organization {
  _id: string;
  active: boolean;
  type: OrganizationType[];
  name: string;
  alias?: string[];
  description?: string;
  contact: ExtendedContactDetail[];
  partOf?: Organization; // Reference to another organization
  endpoint?: Endpoint[];
  qualification?: Qualification[]; // Qualifications of the organization
}
