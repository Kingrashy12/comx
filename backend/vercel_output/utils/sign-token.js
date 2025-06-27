"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signIndividual = exports.signCorporate = void 0;
const secret = process.env.JWT_AUTH_SECRET;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const signIndividual = (user) => {
    return jsonwebtoken_1.default.sign({
        ...user,
    }, String(secret));
};
exports.signIndividual = signIndividual;
const signCorporate = (user) => {
    return jsonwebtoken_1.default.sign({
        ...user,
    }, String(secret));
};
exports.signCorporate = signCorporate;
