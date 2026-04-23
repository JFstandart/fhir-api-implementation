import { model } from "mongoose";
import { Encounter } from "../../definitions/encounter.definition";
import { encounterSchema } from "../schemas/encounter.schema";

const EncounterModel = model<Encounter>("Encounter", encounterSchema);

export { EncounterModel };
