import { model } from "mongoose";
import { Patient } from "../../definitions/patient.definition";
import { patientSchema } from "../schemas/patient.schema";

const PatientModel = model<Patient>("Patient", patientSchema, "patients");

export { PatientModel };
