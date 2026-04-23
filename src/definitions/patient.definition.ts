import { Patient as FHIRPatient } from "@medplum/fhirtypes";

/**
 * We extend the official FHIR Patient type for Mongoose compatibility if needed,
 * but for now, we use the official type directly for the interface.
 */
export type Patient = FHIRPatient & { _id: string };
