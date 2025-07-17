import { Schema } from "mongoose";
import {
  Endpoint,
  EndpointConnectionType,
  EndpointConnectionTypeValues,
  EndpointEnvironmentTypeValues,
  EndpointStatusValues,
} from "../../definitions/endpoint.definition";
import { contactPointSchema } from "./datatypes/contactPoint.schema";
import { PeriodSchema } from "./datatypes/period.schema";

const endpointSchema = new Schema<Endpoint>(
  {
    _id: { type: String, required: true },
    status: { type: String, enum: { values: EndpointStatusValues } },
    connectionType: {
      type: [String],
      enum: {
        values: EndpointConnectionTypeValues,
        message: "`{VALUE}`, Invalid value for Endpoint Connection Type",
      },
      default: [EndpointConnectionType["hl7-fhir-rest"]],
      required: true,
    },
    name: { type: String },
    description: { type: String },
    environmentType: [
      {
        type: String,
        enum: {
          values: EndpointEnvironmentTypeValues,
          message: "`{VALUE}`, Invalid value for Endpoint Environment Type",
        },
        required: false,
      },
    ],
    managingOrganization: { type: Schema.Types.ObjectId, ref: "Organization" },
    contact: { type: [contactPointSchema], default: [] },
    period: {
      type: PeriodSchema,
      default: { start: new Date(), end: new Date() },
    },
    payload: [
      {
        type: String,
        mimeType: { type: String },
      },
    ],
    address: { type: String, required: true },
    header: [{ type: String }],
  },
  { timestamps: false }
);

export { endpointSchema };
