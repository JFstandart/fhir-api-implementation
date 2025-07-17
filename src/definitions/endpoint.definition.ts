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
  status: EndpointStatus;
  connectionType: EndpointConnectionType[]; // Type of connection (e.g., REST, SOAP)
  name?: string; // Name of the endpoint
  description?: string; // Description of the endpoint
  environmentType?: EndpointEnvironmentType[]; // Environment type (e.g., production, test)
  managingOrganization?: Organization; // Reference to the managing organization
  contact?: ContactPoint[]; // Contact details for the endpoint
  period?: Period; // Period during which the endpoint is active
  payload?: EndpointPayload[]; // Payloads supported by the endpoint
  address: string; // URL or address of the endpoint
  header?: string[]; // Headers to be included in requests to the endpoint
}

export enum EndpointStatus {
  active = "Active",
  suspended = "Suspended",
  error = "Error",
  off = "Off",
  "entered-in-error" = "Entered in error",
}

export enum EndpointConnectionType {
  "dicom-wado-rs" = "DICOM WADO-RS",
  "dicom-qido-rs" = "DICOM QIDO-RS",
  "dicom-stow-rs" = "DICOM STOW-RS",
  "dicom-wado-uri" = "DICOM WADO-URI",
  "hl7-fhir-rest" = "HL7 FHIR",
  "hl7-fhir-msg" = "HL7 FHIR Messaging",
  "hl7v2-mllp" = "HL7 v2 MLLP",
  "secure-email" = "Secure email",
  "direct-project" = "Direct Project",
  "cds-hooks-service" = "CDS Hooks Service",
}

export enum EndpointEnvironmentType {
  prod = "Production",
  staging = "Staging",
  dev = "Development",
  test = "Test",
  train = "Training",
}

export const EndpointStatusValues = Object.values(EndpointStatus);
export const EndpointConnectionTypeValues = Object.values(
  EndpointConnectionType
);
export const EndpointEnvironmentTypeValues = Object.values(
  EndpointEnvironmentType
);
