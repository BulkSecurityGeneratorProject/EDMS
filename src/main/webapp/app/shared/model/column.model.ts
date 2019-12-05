import { BooleanLiteral } from 'typescript';

export interface IColumn {
  id?: boolean;
  location?: boolean;
  totalExperience?: boolean;
  jobTitle?: boolean;
  skillCategory?: boolean;
  typeOfRole?: boolean;
  specificSkills?: boolean;
  generalSkills?: boolean;
  clientDomain?: boolean;
  mode?: boolean;
  employer?: boolean;
  primeVendor?: boolean;
  endClient?: boolean;
  currentProjectStartDate?: boolean;
  currentProjectEndDate?: boolean;
  remarks?: boolean;
  empType?: boolean;
  srsEmpId?: boolean;
  fullName?: boolean;
  firstName?: boolean;
  lastName?: boolean;
  education?: boolean;
  certification?: boolean;
  email?: boolean;
  contactNo?: boolean;
  status?: boolean;
  homePhone?: boolean;
  mobileNumber?: boolean;
  workPhoneNumber?: boolean;
  dob?: boolean;
  addedOn?: boolean;
  addtionalNotifiers?: boolean;
  source?: boolean;
  primarySkills?: boolean;
  benchAge?: boolean;
  technology?: boolean;
  payType?: boolean;
  workExperience?: boolean;
  layerOne?: boolean;
  layerTwo?: boolean;
  srsJoiningDate?: boolean;
}

export class Column implements IColumn {
  constructor(
    id?: boolean,
    location?: boolean,
    totalExperience?: boolean,
    title?: boolean,
    skillCategory?: boolean,
    typeOfRole?: boolean,
    specificSkills?: boolean,
    generalSkills?: boolean,
    clientDomain?: boolean,
    mode?: boolean,
    employer?: boolean,
    primeVendor?: boolean,
    endClient?: boolean,
    currentProjectStartDate?: boolean,
    currentProjectEndDate?: boolean,
    remarks?: boolean,
    empType?: boolean,
    srsEmpId?: boolean,
    fullName?: boolean,
    firstName?: boolean,
    lastName?: boolean,
    education?: boolean,
    certification?: boolean,
    email?: boolean,
    contactNo?: boolean,
    status?: boolean,
    homePhone?: boolean,
    mobileNumber?: boolean,
    workPhoneNumber?: boolean,
    dob?: boolean,
    addedOn?: boolean,
    addtionalNotifiers?: boolean,
    source?: boolean,
    primarySkills?: boolean,
    benchAge?: boolean,
    technology?: boolean,
    payType?: boolean,
    workExperience?: boolean,
    layerOne?: boolean,
    layerTwo?: boolean,
    srsJoiningDate?: boolean
  ) {}
}