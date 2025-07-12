import { CodeableConcept } from "./structures/codeableConcept.structure";
import { ContactPoint } from "./datatypes/contactPoint.datatype";
import { Period } from "./datatypes/period.datatype";
import { Organization } from "./organization.definition";

export interface EndpointPayload {
  type: CodeableConcept[]; // Type of payload
  mimeType: string[]; // MIME type of the payload
}

export interface Endpoint {
  _id: string;
  status:
    | "active"
    | "suspended"
    | "error"
    | "off"
    | "entered-in-error"
    | "test";
  connectionType: CodeableConcept[]; // Type of connection (e.g., REST, SOAP)
  name?: string; // Name of the endpoint
  description?: string; // Description of the endpoint
  environmentType?: CodeableConcept[]; // Environment type (e.g., production, test)
  managingOrganization?: Organization; // Reference to the managing organization
  contact?: ContactPoint[]; // Contact details for the endpoint
  period?: Period; // Period during which the endpoint is active
  payload?: EndpointPayload[]; // Payloads supported by the endpoint
  address: string; // URL or address of the endpoint
  header?: string[]; // Headers to be included in requests to the endpoint
}
