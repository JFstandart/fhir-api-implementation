import { Request, Response } from "express";
import { ConditionModel } from "../entities/models/condition.model";
import { fromFHIR, toFHIR } from "../helpers/fhir.helper";

export const getConditions = async (req: Request, res: Response) => {
  try {
    const { patient, status } = req.query;
    const filter: any = {};

    if (patient) {
      filter["subject.reference"] = patient;
    }
    if (status) {
      filter["clinicalStatus"] = status;
    }

    const conditions = await ConditionModel.find(filter).sort({ recordedDate: -1 });
    res.status(200).json(conditions.map(toFHIR));
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const getConditionById = async (req: Request, res: Response) => {
  try {
    const condition = await ConditionModel.findById(req.params.id);
    if (!condition) {
      return res.status(404).json({ message: "Condition not found" });
    }
    res.status(200).json(toFHIR(condition));
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const createCondition = async (req: Request, res: Response) => {
  try {
    const data = fromFHIR(req.body);
    const newCondition = new ConditionModel(data);
    await newCondition.save();
    res.status(201).json(toFHIR(newCondition));
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

export const updateCondition = async (req: Request, res: Response) => {
  try {
    const data = fromFHIR(req.body);
    const updatedCondition = await ConditionModel.findByIdAndUpdate(
      req.params.id,
      data,
      { new: true }
    );
    if (!updatedCondition) {
      return res.status(404).json({ message: "Condition not found" });
    }
    res.status(200).json(toFHIR(updatedCondition));
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteCondition = async (req: Request, res: Response) => {
  try {
    const deletedCondition = await ConditionModel.findByIdAndDelete(req.params.id);
    if (!deletedCondition) {
      return res.status(404).json({ message: "Condition not found" });
    }
    res.status(204).send();
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
