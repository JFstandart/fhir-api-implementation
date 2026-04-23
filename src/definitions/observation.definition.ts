import { Observation as FHIRObservation } from "@medplum/fhirtypes";

export type Observation = FHIRObservation & { _id: string };
