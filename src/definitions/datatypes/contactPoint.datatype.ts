import { Period } from "./period.datatype";

export interface ContactPoint {
  system: ContactPointSystem; // The type of contact point (e.g., phone, email)
  value: string; // The actual contact point value (e.g., phone number, email address)
  use?: ContactPointUse; // Optional, the purpose of the contact point (e.g., home, work)
  rank?: number; // Optional, to indicate the priority of this contact point
  period?: Period; // Optional, the period during which this contact point is valid
}

export enum ContactPointSystem {
  phone = "Phone",
  fax = "Fax",
  email = "Email",
  pager = "Pager",
  url = "Url",
  sms = "Sms",
  other = "Other",
}

export enum ContactPointUse {
  home = "Home",
  work = "Work",
  temp = "Temp",
  old = "Old",
  mobile = "Mobile",
  other = "Other",
}

export const ContactPointSystemValues = Object.values(ContactPointSystem);
export const ContactPointUseValues = Object.values(ContactPointUse);
