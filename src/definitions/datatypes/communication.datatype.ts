import { CommonLanguages } from "../terminologies/commonLanguages.terminology";

export interface Communication {
  language: CommonLanguages; //TODO: Check how to define language properly
  preferred?: boolean;
}
