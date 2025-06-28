"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createIndividual = exports.createCorporate = exports.checkCompanyExists = exports.checkUserExists = void 0;
// import { query } from "../config/postgresClient";
const neon_1 = require("../config/neon");
const checkUserExists = async (email, phone_number) => {
    const result = await (0, neon_1.query)(`SELECT * FROM individuals WHERE email = $1 OR phone_number = $2`, [email, phone_number]);
    return result.length !== 0;
};
exports.checkUserExists = checkUserExists;
const checkCompanyExists = async (email) => {
    const result = await (0, neon_1.query)(`SELECT * FROM corporates WHERE company_email = $1`, [email]);
    return result.length !== 0;
};
exports.checkCompanyExists = checkCompanyExists;
const createCorporate = async ({ company_email, company_name, date_of_incorporation, password, type_of_business, }) => {
    const data = await (0, neon_1.query)(`INSERT INTO corporates (company_name, type_of_business, date_of_incorporation, company_email, password)
     VALUES($1, $2, $3, $4, $5)
     RETURNING id, company_name, type_of_business, date_of_incorporation, company_email`, [
        company_name,
        type_of_business,
        date_of_incorporation,
        company_email,
        password,
    ]);
    return data[0];
};
exports.createCorporate = createCorporate;
const createIndividual = async ({ first_name, last_name, email, phone_number, password, }) => {
    const data = await (0, neon_1.query)(`INSERT INTO individuals (first_name, last_name, email, phone_number, password)
     VALUES ($1, $2, $3, $4, $5)
     RETURNING id, first_name, last_name, email, phone_number`, [first_name, last_name, email, phone_number, password]);
    return data[0];
};
exports.createIndividual = createIndividual;
