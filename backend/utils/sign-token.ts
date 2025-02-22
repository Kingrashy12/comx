const secret = process.env.JWT_SECRET;
import jwt from "jsonwebtoken";
import { CorporateAuthRes, IndividualAuthRes } from "../types/auth";

const signIndividual = (user: IndividualAuthRes) => {
  return jwt.sign(
    {
      ...user,
    },
    String(secret)
  );
};

const signCorporate = (user: CorporateAuthRes) => {
  return jwt.sign(
    {
      ...user,
    },
    String(secret)
  );
};

export { signCorporate, signIndividual };
