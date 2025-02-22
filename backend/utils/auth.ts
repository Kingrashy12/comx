// import { query } from "../config/postgresClient";
import { query } from "../config/neon";
import { CorporateFileds, IndividualFileds } from "../types/auth";

export const checkUserExists = async (email: string, phone_number: string) => {
  const result = await query(
    `SELECT * FROM individuals WHERE email = $1 OR phone_number = $2`,
    [email, phone_number]
  );

  return result.length !== 0;
};

export const checkCompanyExists = async (email: string) => {
  const result = await query(
    `SELECT * FROM corporates WHERE company_email = $1`,
    [email]
  );

  return result.length !== 0;
};

const createCorporate = async ({
  company_email,
  company_name,
  date_of_incorporation,
  password,
  type_of_business,
}: CorporateFileds) => {
  const data = await query(
    `INSERT INTO corporates (company_name, type_of_business, date_of_incorporation, company_email, password)
     VALUES($1, $2, $3, $4, $5)
     RETURNING id, company_name, type_of_business, date_of_incorporation, company_email`,
    [
      company_name,
      type_of_business,
      date_of_incorporation,
      company_email,
      password,
    ]
  );
  return data[0];
};

const createIndividual = async ({
  first_name,
  last_name,
  email,
  phone_number,
  password,
}: IndividualFileds) => {
  const data = await query(
    `INSERT INTO individuals (first_name, last_name, email, phone_number, password)
     VALUES ($1, $2, $3, $4, $5)
     RETURNING id, first_name, last_name, email, phone_number`,
    [first_name, last_name, email, phone_number, password]
  );
  return data[0];
};

export { createCorporate, createIndividual };
