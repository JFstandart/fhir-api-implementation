import { Schema } from "mongoose";
import { ExtendedContactDetail } from "../../../definitions/datatypes/extendedContactDetail.datatype";
import { addressSchema } from "./address.schema";
import { contactPointSchema } from "./contactPoint.schema";
import { humanNameSchema } from "./humanName.schema";
import { PeriodSchema } from "./period.schema";

const extendedContactDetailSchema = new Schema<ExtendedContactDetail>({
  purpose: [{ type: String }],
  name: { type: humanNameSchema },
  telecom: [{ type: contactPointSchema }],
  address: [{ type: addressSchema }],
  organization: { type: Schema.Types.ObjectId, ref: "Organization" },
  period: { type: PeriodSchema },
});

export { extendedContactDetailSchema };
