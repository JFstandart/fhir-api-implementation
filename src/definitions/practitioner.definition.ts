import { Address } from "./datatypes/address.datatype";
import { Attachment } from "./datatypes/attachment.datatype";
import { Communication } from "./datatypes/communication.datatype";
import { ContactPoint } from "./datatypes/contactPoint.datatype";
import { HumanName } from "./datatypes/humanName.datatype";
import { Qualification } from "./datatypes/qualification.datatype";
import { Gender } from "./terminologies/gender.terminology";

export interface Practitioner {
  _id: string;
  active: boolean;
  name: HumanName[];
  telecom: ContactPoint[];
  gender?: Gender;
  birthDate?: Date;
  deceased?: boolean | Date;
  address?: Address[];
  photo?: Attachment[];
  qualification?: Qualification[];
  communication?: Communication[];
}
