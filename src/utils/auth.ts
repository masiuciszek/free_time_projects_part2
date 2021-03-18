import { PrismaClient } from "@prisma/client";
import jwt from "jsonwebtoken";
import { AuthenticationError } from "apollo-server-errors";
import { Dict, UnWrap, Context, TokenPayload } from "../types";
import bcrypt from "bcryptjs";

export const createToken = ({ id }: { id: number }) => jwt.sign({ id }, "secret");

export const getUserFromToken = async (token: string, prisma: PrismaClient) => {
  if (token) {
    const user = jwt.verify(token, "secret") as TokenPayload;
    return await prisma.user.findUnique({ where: { id: user.user_id } });
  } else {
    return Promise.resolve({ ok: false, msg: "not authorized" });
  }
};

export const authenticated = (next: Function) => async (
  parent: UnWrap<Dict>,
  args: UnWrap<Dict>,
  context: Context,
  info: UnWrap<Dict>
) => {
  if (!context.user) {
    throwAuthError();
  }
  return next(parent, args, context, info);
};

export const throwAuthError = (msg = "Not authorized"): Error => {
  throw new AuthenticationError(msg);
};

export const comparePassword = async (
  password: string,
  passWordToMatch: string
): Promise<boolean> => await bcrypt.compare(password, passWordToMatch);

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
