import { compare, genSalt, hash } from "bcrypt";

const hashPassword = async (password: string) => {
  const salt = await genSalt(10);
  const hashedPassword = await hash(password, salt);

  return hashedPassword;
};

const comparePassword = async (password: string, userPassword: string) => {
  return await compare(password, userPassword);
};

export { comparePassword, hashPassword };
