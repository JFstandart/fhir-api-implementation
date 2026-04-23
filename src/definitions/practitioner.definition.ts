import { Practitioner as FHIRPractitioner } from "@medplum/fhirtypes";

export type Practitioner = FHIRPractitioner & { _id: string };
