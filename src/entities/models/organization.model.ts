import { model } from "mongoose";
import { Organization } from "../../definitions/organization.definition";
import { organizationSchema } from "../schemas/organization.schema";

const OrganizationModel = model<Organization>(
  "Organization",
  organizationSchema,
  "organizations"
);

export { OrganizationModel };
