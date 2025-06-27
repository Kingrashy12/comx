"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hashPassword = exports.comparePassword = void 0;
const bcrypt_1 = require("bcrypt");
const hashPassword = async (password) => {
    const salt = await (0, bcrypt_1.genSalt)(10);
    const hashedPassword = await (0, bcrypt_1.hash)(password, salt);
    return hashedPassword;
};
exports.hashPassword = hashPassword;
const comparePassword = async (password, userPassword) => {
    return await (0, bcrypt_1.compare)(password, userPassword);
};
exports.comparePassword = comparePassword;
