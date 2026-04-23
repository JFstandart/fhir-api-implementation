import { Request, Response } from "express";
import { PatientModel } from "../entities/models/patient.model";
import { fromFHIR, toFHIR } from "../helpers/fhir.helper";

export const createPatient = async (req: Request, res: Response) => {
  try {
    const data = fromFHIR(req.body);
    const patient = new PatientModel(data);
    await patient.save();
    res.status(201).json(toFHIR(patient));
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

export const getPatients = async (req: Request, res: Response) => {
  try {
    const patients = await PatientModel.find();
    res.json(patients.map(toFHIR));
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const getPatientById = async (req: Request, res: Response) => {
  try {
    const patient = await PatientModel.findById(req.params.id);
    if (!patient) {
      return res.status(404).json({ message: "Patient not found" });
    }
    res.json(toFHIR(patient));
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const updatePatient = async (req: Request, res: Response) => {
  try {
    const data = fromFHIR(req.body);
    const patient = await PatientModel.findByIdAndUpdate(req.params.id, data, { new: true });
    if (!patient) {
      return res.status(404).json({ message: "Patient not found" });
    }
    res.json(toFHIR(patient));
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

export const deletePatient = async (req: Request, res: Response) => {
  try {
    const deleted = await PatientModel.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ message: "Patient not found" });
    }
    res.json({ message: "Patient deleted successfully" });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
