import { PrismaClient } from "@prisma/client";
import jwt from "jsonwebtoken";
import { AuthenticationError } from "apollo-server-errors";
import { Dict, UnWrap, Context, TokenPayload } from "../types";
import bcrypt from "bcryptjs";
import { GraphQLArgs, GraphQLResolveInfo } from "graphql";
import { Request, Response } from "express";

export const createToken = ({ id }: { id: number }) =>
  jwt.sign({ userId: id, role: "USER" }, "secret");

export const getUserFromToken = async (token: string, prisma: PrismaClient) => {
  if (token) {
    const user = jwt.verify(token, "secret") as TokenPayload;
    return await prisma.user.findUnique({ where: { id: user.userId } });
  } else {
    return false;
  }
};

export const authenticated = (next: Function) => async (
  parent: UnWrap<Dict>,
  args: GraphQLArgs,
  context: Context,
  info: GraphQLResolveInfo,
) => {
  if (!context.authResponse) {
    throwAuthError();
  }
  return next(parent, args, context, info);
};

export const throwAuthError = (msg = "Not authorized"): AuthenticationError => {
  throw new AuthenticationError(msg);
};

export const comparePassword = async (
  password: string,
  passWordToMatch: string,
): Promise<boolean> => await bcrypt.compare(password, passWordToMatch);

export const hashPassword = async (inputPassword: string) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(inputPassword, salt);
};

export const tokenHandler = (token: string, res: Response) => {
  let date = new Date();
  const options = {
    expire: date.setHours(date.getHours() + 24),
    httpOnly: false,
    secure: false,
  };

  if (process.env.NODE_ENV === "production") {
    (options.httpOnly = true), (options.secure = true);
  }
  res?.cookie("auth-token", token, options);
  return { token };
};

export const handleAuthToken = (req: Request) => {
  if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
    const token = req.headers.authorization.replace("Bearer", "");
    return token;
  }
  return null;
};

// const authorized = (role: Role, next: Function) => (
//   parent: UnWrap<Dict>,
//   args: UnWrap<Dict>,
//   context: UnWrap<Dict>,
//   info: UnWrap<Dict>
// ) => {
//   //
//   if (context.user.role !== role) {
//     throw new AuthenticationError(`you must have ${role} role`)
//   }

//   return next(root, args, context, info)
// };
