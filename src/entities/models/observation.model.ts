import { model } from "mongoose";
import { Observation } from "../../definitions/observation.definition";
import { observationSchema } from "../schemas/observation.schema";

const ObservationModel = model<Observation>("Observation", observationSchema);

export { ObservationModel };
