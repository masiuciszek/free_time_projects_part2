import { User } from ".prisma/client";
import bcrypt from "bcryptjs";
import { Response, Request } from "express";
import jwt from "jsonwebtoken";
import { TokenPayload } from "../types";

export const isOk = <T>(p: Promise<T>) => {
  return p.then(data => ({ ok: true, data })).catch(err => Promise.resolve({ ok: false, err }));
};

export function to<T, U = Error>(
  promise: Promise<T>,
  errorObject?: object
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
  const token = jwt.sign({ user_id: user?.id }, "secret", { expiresIn: expires });
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
  return { token };
};

export const comparePassword = async (
  password: string,
  passWordToMatch: string
): Promise<boolean> => await bcrypt.compare(password, passWordToMatch);

export const verifyToken = (token: string) => {
  return jwt.verify(token, "secret");
};

// Pass the token forward and handle it in each resolver
// I don't want to throw an error if we cant verify token
// Not all routes will need a authentication token!
export const sendTokenToResolver = (req: Request) => {
  const authHeader = req.headers && req.headers.authorization;
  const token = authHeader && authHeader.replace("Bearer", "");
  return token;
};

export const toStr = (x: boolean | number | string): string => x.toString().trim()!;

export const getAuthId = async (authId: number) => {
  const [__, jwtToken] = await to(Promise.resolve(authId));
  if (!jwtToken) {
    throw new Error("Auth error");
  }
  const { user_id } = verifyToken(toStr(jwtToken)) as TokenPayload;
  if (!user_id) {
    throw new Error("no user found");
  }

  return { user_id };
};
