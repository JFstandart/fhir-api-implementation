import { HumanName } from "./datatypes/humanName.datatype";
import { ContactPoint } from "./datatypes/contactPoint.datatype";
import { Gender } from "./terminologies/gender.terminology";
import { Address } from "./datatypes/address.datatype";
import { Attachment } from "./datatypes/attachment.datatype";
import { Period } from "./datatypes/period.datatype";
import { Organization } from "./organization.definition";
import { MaritalStatus } from "./terminologies/maritalStatus.terminology";
import { ContactRelationship } from "./terminologies/contactRelationship.terminology";
import { LinkType } from "./terminologies/linkType.terminology";
import { Communication } from "./datatypes/communication.datatype";
import { Practitioner } from "./practitioner.definition";

export interface PatientContact {
  //TODO: Define Contact as datatype
  relationship?: ContactRelationship[];
  name?: HumanName;
  telecom?: ContactPoint[];
  address?: Address;
  gender: Gender;
  organization?: Organization;
  period?: Period;
}

export interface PatientLink {
  //TODO: Define LinkType as datatype
  other: Patient;
  type: LinkType;
}

export interface Patient {
  _id: string;
  active: boolean;
  name: HumanName[];
  telecom: ContactPoint[];
  gender: Gender;
  birthDate: Date;
  deceased?: boolean | Date;
  address?: Address;
  maritalStatus?: MaritalStatus;
  multipleBirth?: boolean | number;
  photo?: Attachment[];
  contact?: PatientContact[];
  communication?: Communication[];
  generalPractitioner?: Practitioner[]; //TODO: Define PractitionerRole
  managingOrganization?: Organization;
  link?: PatientLink[];
}
