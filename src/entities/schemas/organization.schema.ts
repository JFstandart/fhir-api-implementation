import { Schema } from "mongoose";
import { Organization } from "../../definitions/organization.definition";
import { endpointSchema } from "./endpoint.schema";
import { qualificationSchema } from "./datatypes/qualification.schema";
import { extendedContactDetailSchema } from "./datatypes/extendedContactDetail.schema";
import { OrganizationTypeValues } from "../../definitions/terminologies/organizationType.terminology";

const organizationSchema = new Schema<Organization>({
  _id: { type: String, required: true },
  active: { type: Boolean, required: true },
  type: [
    {
      type: String,
      enum: {
        values: OrganizationTypeValues,
        message: "`{VALUE}`, Invalid value for Organization Type",
      },
    },
  ],
  name: { type: String, required: true },
  alias: [{ type: String }],
  description: [{ type: String }],
  contact: [{ type: extendedContactDetailSchema }],
  partOf: { type: Schema.Types.ObjectId, ref: "Organization" },
  endpoint: [{ type: endpointSchema }],
  qualification: [{ type: qualificationSchema }],
});

export { organizationSchema };
