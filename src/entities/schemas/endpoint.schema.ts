import { Schema } from "mongoose";
import { Endpoint } from "../../definitions/endpoint.definition";
import { contactPointSchema } from "./datatypes/contactPoint.schema";
import { PeriodSchema } from "./datatypes/period.schema";
import { codeableConceptSchema } from "./datatypes/codeableConcept.schema";

const endpointSchema = new Schema<Endpoint>(
  {
    _id: { type: String, required: true },
    resourceType: { type: String, default: "Endpoint", required: true },
    status: { type: String },
    connectionType: [codeableConceptSchema],
    name: { type: String },
    managingOrganization: { type: Schema.Types.Mixed },
    contact: [contactPointSchema],
    period: PeriodSchema,
    address: { type: String, required: true },
    header: [{ type: String }],
  },
  { timestamps: false }
);

export { endpointSchema };
