import { Schema } from "mongoose";
import { Patient } from "../../definitions/patient.definition";
import { humanNameSchema } from "./datatypes/humanName.schema";
import { contactPointSchema } from "./datatypes/contactPoint.schema";
import { addressSchema } from "./datatypes/address.schema";
import { attachmentSchema } from "./datatypes/attachment.schema";
import { PeriodSchema } from "./datatypes/period.schema";
import { communicationSchema } from "./datatypes/communication.schema";
import {
  GenderValues,
  MaritalStatusValues,
  ContactRelationshipValues,
  LinkTypeValues,
} from "../../definitions/terminologies";

const patientSchema = new Schema<Patient>({
  _id: { type: String, required: true },
  resourceType: { type: String, default: "Patient", required: true },
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
  birthDate: { type: String, required: true }, // FHIR birthDate is string (date)
  deceasedBoolean: { type: Boolean },
  deceasedDateTime: { type: String },
  address: { type: [addressSchema], default: [] },
  maritalStatus: { type: Schema.Types.Mixed },
  multipleBirthBoolean: { type: Boolean },
  multipleBirthInteger: { type: Number },
  photo: { type: [attachmentSchema], default: [] },
  contact: {
    type: [
      {
        relationship: { type: [Schema.Types.Mixed] },
        name: { type: humanNameSchema },
        telecom: { type: [contactPointSchema], default: [] },
        address: { type: addressSchema },
        gender: { type: String, enum: GenderValues },
        organization: { type: String },
        period: { type: PeriodSchema },
      },
    ],
    default: [],
  },
  communication: {
    type: [communicationSchema],
    default: [],
  },
  generalPractitioner: {
    type: [Schema.Types.Mixed],
    default: [],
  },
  managingOrganization: {
    type: Schema.Types.Mixed,
    default: null,
  },
  link: {
    type: [
      {
        other: { type: Schema.Types.Mixed, required: true },
        type: {
          type: String,
          enum: LinkTypeValues,
          required: true,
        },
      },
    ],
    default: [],
  },
});

export { patientSchema };
