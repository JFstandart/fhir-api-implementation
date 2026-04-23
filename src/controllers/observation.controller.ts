import { Request, Response } from "express";
import { ObservationModel } from "../entities/models/observation.model";
import { fromFHIR, toFHIR } from "../helpers/fhir.helper";

export const getObservations = async (req: Request, res: Response) => {
  try {
    const { patient, category, code } = req.query;
    const filter: any = {};

    if (patient) {
      filter["subject.reference"] = patient;
    }
    if (category) {
      filter["category.coding.code"] = category;
    }
    if (code) {
      filter["code.coding.code"] = code;
    }

    const observations = await ObservationModel.find(filter).sort({ effectiveDateTime: -1 });
    res.status(200).json(observations.map(toFHIR));
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const getObservationById = async (req: Request, res: Response) => {
  try {
    const observation = await ObservationModel.findById(req.params.id);
    if (!observation) {
      return res.status(404).json({ message: "Observation not found" });
    }
    res.status(200).json(toFHIR(observation));
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const createObservation = async (req: Request, res: Response) => {
  try {
    const data = fromFHIR(req.body);
    const newObservation = new ObservationModel(data);
    await newObservation.save();
    res.status(201).json(toFHIR(newObservation));
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

export const updateObservation = async (req: Request, res: Response) => {
  try {
    const data = fromFHIR(req.body);
    const updatedObservation = await ObservationModel.findByIdAndUpdate(
      req.params.id,
      data,
      { new: true }
    );
    if (!updatedObservation) {
      return res.status(404).json({ message: "Observation not found" });
    }
    res.status(200).json(toFHIR(updatedObservation));
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteObservation = async (req: Request, res: Response) => {
  try {
    const deletedObservation = await ObservationModel.findByIdAndDelete(req.params.id);
    if (!deletedObservation) {
      return res.status(404).json({ message: "Observation not found" });
    }
    res.status(204).send();
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
