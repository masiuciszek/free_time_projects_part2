import { User } from ".prisma/client";
import bcrypt from "bcryptjs";
import { Response } from "express";
import jwt from "jsonwebtoken";

export const isOk = <T>(p: Promise<T>) => {
  return p.then(data => ({ ok: true, data })).catch(err => Promise.resolve({ ok: false, err }));
};

export function to<T, U = Error>(
  promise: Promise<T>,
  errorObject?: object,
): Promise<[U, undefined] | [null, T]> {
  return promise
    .then<[null, T]>((data: T) => [null, data])
    .catch<[U, undefined]>((err: U) => {
      if (errorObject) {
        Object.assign(err, errorObject);
      }
      return [err, undefined];
    });
}

export const hashPassord = async (password: string): Promise<string> => {
  const salt = await bcrypt.genSalt(8);
  return await bcrypt.hash(password, salt);
};

export const generateJwtToken = (user: User, expires = "24h") => {
  const token = jwt.sign({ id: user?.id }, "secret", { expiresIn: "24h" });
  return token;
};

export const tokenHandler = (user: User, res: Response) => {
  const token = generateJwtToken(user);
  let date = new Date();
  const options = {
    expire: date.setHours(date.getHours() + 24),
    httpOnly: false,
    secure: false,
  };

  if (process.env.NODE_ENV === "production") {
    (options.httpOnly = true), (options.secure = true);
  }
  res?.cookie("token", token, options);
};
