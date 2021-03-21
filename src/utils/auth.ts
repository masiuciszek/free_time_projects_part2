import { User } from "@prisma/client";
import jwt from "jsonwebtoken";
import { Context } from "../context";
import bcrypt from "bcryptjs";
import variables from "../config";
import { BEARER } from "./constants";
import { Response } from "express";
import { TokenPayload } from "../types";

export const hashPassword = async (password: string) => {
  const salt = await bcrypt.genSalt(8);
  return await bcrypt.hash(password, salt);
};

export const createToken = ({ id, role }: User) => {
  const token = jwt.sign({ userId: id, role }, variables.jwt_scrert, { expiresIn: "12h" });
  return token;
};

export const tokenHandler = (token: string, res: Response) => {
  const options = { expires: new Date(Date.now() + 900000 * 12), httpOnly: false, secure: false };

  if (process.env.NODE_ENV === "production") {
    options.httpOnly = true;
    options.secure = true;
  }

  res.cookie("auth-token", token, options);
  return token;
};

const verifyToken = (token: string, secret: string) => {
  return jwt.verify(token, secret) as TokenPayload;
};

export const getUserId = ({ req }: Context) => {
  const authHeader = req.get("Authorization");
  if (authHeader && authHeader.startsWith(BEARER)) {
    const token = authHeader.replace(BEARER, "").trim();
    const verifiedToken = verifyToken(token, variables.jwt_scrert);
    return verifiedToken && Number(verifiedToken.userId);
  }
  return null;
};

export const comparePassword = async (password: string, storedPassword: string) => {
  return await bcrypt.compare(password, storedPassword);
};
