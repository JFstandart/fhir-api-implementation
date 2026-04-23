import { Schema } from "mongoose";
import { Organization } from "../../definitions/organization.definition";
import { extendedContactDetailSchema } from "./datatypes/extendedContactDetail.schema";
import { codeableConceptSchema } from "./datatypes/codeableConcept.schema";

const organizationSchema = new Schema<Organization>({
  _id: { type: String, required: true },
  resourceType: { type: String, default: "Organization", required: true },
  active: { type: Boolean, required: true },
  type: [{ type: codeableConceptSchema }],
  name: { type: String, required: true },
  alias: [{ type: String }],
  contact: [{ type: extendedContactDetailSchema }],
  partOf: { type: Schema.Types.Mixed },
  endpoint: [{ type: Schema.Types.Mixed }],
}, { timestamps: false });

export { organizationSchema };
