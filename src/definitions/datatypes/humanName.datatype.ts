import { Period } from "./period.datatype";

export interface HumanName {
  use?: HumanNameUse; // The purpose of the name (e.g., official, usual, temp)
  text: string; // Full name as a string
  family: string; // Last name of the individual
  given: string[]; // First name of the individual
  prefix?: string[]; // Title or honorifics (e.g., Dr., Mr., Mrs.)
  suffix?: string[]; // Additional name components (e.g., Jr., Sr.)
  period?: Period; // Period during which the name was in use
}

export enum HumanNameUse {
  official = "official",
  usual = "usual",
  temp = "temp",
  nickname = "nickname",
  anonymous = "anonymous",
  old = "old",
  maiden = "maiden",
}

export const HumanNameUseValues = Object.values(HumanNameUse);
