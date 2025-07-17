import { Schema } from "mongoose";
import {
  Address,
  AddressUseValues,
  AddressTypeValues,
} from "../../../definitions/datatypes/address.datatype";

const addressSchema = new Schema<Address>(
  {
    use: {
      type: String,
      enum: {
        values: AddressUseValues,
        message: "`{VALUE}`, Invalid value for Address use",
      },
      required: false,
    },
    type: {
      type: String,
      enum: {
        values: AddressTypeValues,
        message: "`{VALUE}`, Invalid value for Address type",
      },
      required: false,
    },
    text: String,
    line: [String],
    city: String,
    district: String,
    state: String,
    postalCode: String,
    country: String,
    period: { type: Schema.Types.Mixed, default: null },
  },
  { _id: false, timestamps: false }
);

export { addressSchema };
