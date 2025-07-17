import { Request, Response } from "express";
import { PatientModel } from "../entities/models/patient.model";

export const createPatient = async (req: Request, res: Response) => {
  try {
    const patient = new PatientModel(req.body);
    await patient.save();
    res.status(201).json(patient);
  } catch (error) {
    res.status(400).json({ message: "Error creating patient" });
  }
};

export const getPatients = async (req: Request, res: Response) => {
  try {
    const patients = await PatientModel.find();
    res.json(patients);
  } catch (error) {
    res.status(404).json({ message: "No patients found" });
  }
};

export const getPatientById = async (req: Request, res: Response) => {
  try {
    const patient = await PatientModel.findById(req.params.id);
    if (!patient) {
      res.status(404).json({ message: "Patient not found" });
    } else {
      res.json(patient);
    }
  } catch (error) {
    res.status(404).json({ message: "Patient not found" });
  }
};

export const updatePatient = async (req: Request, res: Response) => {
  try {
    const patient = await PatientModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    if (!patient) {
      res.status(404).json({ message: "Patient not found" });
    } else {
      res.json(patient);
    }
  } catch (error) {
    res.status(400).json({ message: "Error updating patient" });
  }
};

export const deletePatient = async (req: Request, res: Response) => {
  try {
    await PatientModel.findByIdAndDelete(req.params.id);
    res.json({ message: "Patient deleted successfully" });
  } catch (error) {
    res.status(404).json({ message: "Patient not found" });
  }
};
