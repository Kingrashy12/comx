export type CorporateFileds = {
  company_name: string;
  type_of_business: string;
  date_of_incorporation: string;
  company_email: string;
  password: string;
};

export type IndividualFileds = {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  phone_number: string;
};

export type CorporateAuthRes = {
  company_name: string;
  type_of_business: string;
  date_of_incorporation: Date | string;
  company_email: string;
  id: number;
};

export type IndividualAuthRes = {
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  id: number;
};
