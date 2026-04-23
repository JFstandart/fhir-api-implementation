import { Endpoint as FHIREndpoint } from "@medplum/fhirtypes";

export type Endpoint = FHIREndpoint & { _id: string };
