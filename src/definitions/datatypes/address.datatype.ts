import { Period } from "./period.datatype";

export interface Address {
  use?: AddressUse; // Optional, the purpose of the address (e.g., home, work)
  type?: AddressType; // Optional, the type of address
  text?: string; // Optional, full address as a string
  line?: string[]; // Optional, individual address lines (e.g., street, apartment)
  city?: string; // Optional, city of the address
  district?: string; // Optional, district or locality of the address
  state?: string; // Optional, state or province of the address
  postalCode?: string; // Optional, postal or ZIP code of the address
  country?: string; // Optional, country of the address
  period?: Period; // Optional, period during which the address was in use
}

export interface AddressUse {
  use: "home" | "work" | "temp" | "old" | "billing"; // The purpose of the address
}

export interface AddressType {
  type: "postal" | "physical" | "both"; // The type of address
}
