export interface Coding {
  system?: string; // Optional, as not all codings will have a system
  version?: string; // Optional, as not all codings will have a version
  code?: string; // Optional, code defined by a terminology system
  display?: string; // Optional, as not all codings will have a display text
  userSelected?: boolean; // Optional, to indicate if the coding was user-selected
}