import { Organization as FHIROrganization } from "@medplum/fhirtypes";

export type Organization = FHIROrganization & { _id: string };
