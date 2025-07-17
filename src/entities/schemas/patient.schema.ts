import { Schema } from "mongoose";
import { Patient } from "../../definitions/patient.definition";
import { humanNameSchema } from "./datatypes/humanName.schema";
import { contactPointSchema } from "./datatypes/contactPoint.schema";
import { GenderValues } from "../../definitions/terminologies/gender.terminology";
import { addressSchema } from "./datatypes/address.schema";
import {
  MaritalStatus,
  MaritalStatusValues,
} from "../../definitions/terminologies/maritalStatus.terminology";
import { attachmentSchema } from "./datatypes/attachment.schema";
import { ContactRelationshipValues } from "../../definitions/terminologies/contactRelationship.terminology";
import { PeriodSchema } from "./datatypes/period.schema";
import { communicationSchema } from "./datatypes/communication.schema";
import { LinkTypeValues } from "../../definitions/terminologies/linkType.terminology";

const patientSchema = new Schema<Patient>({
  _id: { type: String, required: true },
  active: { type: Boolean, required: true },
  name: { type: [humanNameSchema], required: true },
  telecom: { type: [contactPointSchema], default: [] },
  gender: {
    type: String,
    enum: {
      values: GenderValues,
      message: "{VALUE} is not a valid gender",
    },
    required: true,
  },
  birthDate: { type: Date, required: true },
  deceased: { type: Schema.Types.Mixed, default: null }, // Can be boolean or Date
  address: { type: [addressSchema], default: {} },
  maritalStatus: {
    type: String,
    enum: {
      values: MaritalStatusValues,
      message: "`{VALUE}`, Invalid value for Marital Status",
    },
    required: false,
    default: MaritalStatus.UNK, // Default to Unknown
  },
  multipleBirth: { type: Schema.Types.Mixed, default: null }, // Can be boolean or number
  photo: { type: [attachmentSchema], default: {} },
  contact: {
    type: [
      {
        relationship: {
          type: String,
          enum: {
            values: ContactRelationshipValues,
            message: "`{VALUE}`, Invalid value for Contact Relationship",
          },
          default: null,
          required: false,
        },
        name: {
          type: humanNameSchema,
          default: null,
        },
        telecom: {
          type: [contactPointSchema],
          default: [],
        },
        address: {
          type: addressSchema,
          default: null,
        },
        gender: {
          type: String,
          enum: {
            values: GenderValues,
            message: "{VALUE} is not a valid gender",
          },
          required: true,
        },
        organization: {
          type: Schema.Types.ObjectId,
          ref: "Organization",
          default: null,
        },
        period: {
          type: PeriodSchema,
          default: { start: new Date(), end: new Date() },
        },
      },
    ],
    default: [],
  },
  communication: {
    type: [communicationSchema],
    default: [],
  },
  generalPractitioner: {
    type: [{ type: Schema.Types.ObjectId, ref: "Practitioner" }], //TODO: Define Practitioner schema
    default: [],
  },
  managingOrganization: {
    type: Schema.Types.ObjectId,
    ref: "Organization",
    default: null,
  },
  link: {
    type: [
      {
        other: {
          type: Schema.Types.ObjectId,
          ref: "Patient",
          required: true,
        },
        type: {
          type: String,
          enum: {
            values: LinkTypeValues,
            message: "`{VALUE}`, Invalid value for Patient Link Type",
          },
          required: true,
        },
      },
    ],
    default: [],
  },
});

export { patientSchema };
