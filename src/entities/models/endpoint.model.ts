import { model } from "mongoose";
import { Endpoint } from "../../definitions/endpoint.definition";
import { endpointSchema } from "../schemas/endpoint.schema";

const EndpointModel = model<Endpoint>(
  "Endpoint",
  endpointSchema,
  "endpoints"
);

export { EndpointModel };
