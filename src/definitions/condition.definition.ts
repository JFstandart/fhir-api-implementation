import { Condition as FHIRCondition } from "@medplum/fhirtypes";

export type Condition = FHIRCondition & { _id: string };
