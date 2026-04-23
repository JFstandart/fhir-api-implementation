import { Request, Response } from "express";
import { Model, Document } from "mongoose";
import { toFHIR, fromFHIR } from "../helpers/fhir.helper";

export class BaseController<T> {
  protected model: Model<T>;
  protected resourceType: string;

  constructor(model: Model<T>, resourceType: string) {
    this.model = model;
    this.resourceType = resourceType;
  }

  public getAll = async (req: Request, res: Response) => {
    try {
      const docs = await this.model.find();
      const resources = docs.map((doc) => toFHIR(doc.toObject()));
      res.json(resources);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  };

  public getById = async (req: Request, res: Response) => {
    try {
      const doc = await this.model.findById(req.params.id);
      if (!doc) {
        return res.status(404).json({
          resourceType: "OperationOutcome",
          issue: [
            {
              severity: "error",
              code: "not-found",
              diagnostics: `${this.resourceType} with ID ${req.params.id} not found`,
            },
          ],
        });
      }
      res.json(toFHIR(doc.toObject()));
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  };

  public create = async (req: Request, res: Response) => {
    try {
      const fhirData = { ...req.body, resourceType: this.resourceType };
      const mongoData = fromFHIR(fhirData);
      const newDoc = new this.model(mongoData);
      await newDoc.save();
      res.status(201).json(toFHIR(newDoc.toObject()));
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  };

  public update = async (req: Request, res: Response) => {
    try {
      const mongoData = fromFHIR(req.body);
      const updatedDoc = await this.model.findByIdAndUpdate(
        req.params.id,
        mongoData,
        { new: true }
      );
      if (!updatedDoc) {
        return res.status(404).json({ error: "Not found" });
      }
      res.json(toFHIR(updatedDoc.toObject()));
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  };

  public delete = async (req: Request, res: Response) => {
    try {
      const deletedDoc = await this.model.findByIdAndDelete(req.params.id);
      if (!deletedDoc) {
        return res.status(404).json({ error: "Not found" });
      }
      res.json({ message: `${this.resourceType} deleted successfully` });
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  };
}
