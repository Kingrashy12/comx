"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.query = exports.sql = void 0;
const serverless_1 = require("@neondatabase/serverless");
exports.sql = (0, serverless_1.neon)(String(process.env.DATABASE_URL));
const query = async (queryText, values) => {
    try {
        const result = values
            ? await exports.sql.query(queryText, values)
            : await exports.sql.query(queryText);
        return result;
    }
    catch (error) {
        throw new Error(`${error.message}`);
    }
};
exports.query = query;
// export const query = async <T = Record<string, any>>(text: string, params?: any[]): Promise<T[]> => {
//     return await sql<T>(text, params);
//   };
