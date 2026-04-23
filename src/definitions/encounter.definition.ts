import { Encounter as FHIREncounter } from "@medplum/fhirtypes";

export type Encounter = FHIREncounter & { _id: string };
