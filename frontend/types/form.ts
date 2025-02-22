export type CorporateForm = {
  company_name: string;
  type_of_business: string;
  date_of_incorporation: Date | string;
  company_email: string;
  password: string;
  confirm_password: string;
};

export type IndividualForm = {
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  password: string;
  confirm_password: string;
};

export type ChangePasswordForm = {
  email: string;
  password: string;
  confirm_password: string;
};
