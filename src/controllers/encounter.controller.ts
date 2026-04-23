import { Request, Response } from "express";
import { EncounterModel } from "../entities/models/encounter.model";
import { fromFHIR, toFHIR } from "../helpers/fhir.helper";

export const getEncounters = async (req: Request, res: Response) => {
  try {
    const { patient, status } = req.query;
    const filter: any = {};

    if (patient) {
      filter["subject.reference"] = patient;
    }
    if (status) {
      filter["status"] = status;
    }

    const encounters = await EncounterModel.find(filter).sort({ "period.start": -1 });
    res.status(200).json(encounters.map(toFHIR));
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const getEncounterById = async (req: Request, res: Response) => {
  try {
    const encounter = await EncounterModel.findById(req.params.id);
    if (!encounter) {
      return res.status(404).json({ message: "Encounter not found" });
    }
    res.status(200).json(toFHIR(encounter));
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const createEncounter = async (req: Request, res: Response) => {
  try {
    const data = fromFHIR(req.body);
    const newEncounter = new EncounterModel(data);
    await newEncounter.save();
    res.status(201).json(toFHIR(newEncounter));
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

export const updateEncounter = async (req: Request, res: Response) => {
  try {
    const data = fromFHIR(req.body);
    const updatedEncounter = await EncounterModel.findByIdAndUpdate(
      req.params.id,
      data,
      { new: true }
    );
    if (!updatedEncounter) {
      return res.status(404).json({ message: "Encounter not found" });
    }
    res.status(200).json(toFHIR(updatedEncounter));
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteEncounter = async (req: Request, res: Response) => {
  try {
    const deletedEncounter = await EncounterModel.findByIdAndDelete(req.params.id);
    if (!deletedEncounter) {
      return res.status(404).json({ message: "Encounter not found" });
    }
    res.status(204).send();
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
