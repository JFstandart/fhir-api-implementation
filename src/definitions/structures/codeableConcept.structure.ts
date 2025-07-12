import { Coding } from "../datatypes/coding.datatype";

export interface CodeableConcept {
  coding?: Coding[]; // Optional, as not all concepts will have codings
  text?: string; // Optional, as not all concepts will have a text representation
  [key: string]: any; // Allow additional properties for flexibility
}
