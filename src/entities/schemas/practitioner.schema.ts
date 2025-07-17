import { Schema } from "mongoose";
import { Practitioner } from "../../definitions/practitioner.definition";
import { addressSchema } from "./datatypes/address.schema";
import { communicationSchema } from "./datatypes/communication.schema";
import { contactPointSchema } from "./datatypes/contactPoint.schema";
import { humanNameSchema } from "./datatypes/humanName.schema";
import { qualificationSchema } from "./datatypes/qualification.schema";
import { attachmentSchema } from "./datatypes/attachment.schema";

const practitionerSchema = new Schema<Practitioner>({
  _id: { type: String, required: true },
  active: { type: Boolean, required: true },
  name: [{ type: humanNameSchema }],
  telecom: [{ type: contactPointSchema }],
  gender: { type: String },
  birthDate: { type: Date },
  deceased: { type: Schema.Types.Mixed, default: null }, // Can be boolean or Date
  address: [{ type: addressSchema }],
  photo: { type: [attachmentSchema], default: {} },
  qualification: { type: [qualificationSchema], default: {} },
  communication: {
    type: [communicationSchema],
    default: [],
  },
}, { timestamps: false });

export { practitionerSchema };
