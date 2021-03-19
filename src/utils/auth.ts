import { PrismaClient } from "@prisma/client";
import jwt from "jsonwebtoken";
import { AuthenticationError } from "apollo-server-errors";
import { Dict, UnWrap, Context, TokenPayload } from "../types";
import bcrypt from "bcryptjs";
import { GraphQLArgs, GraphQLResolveInfo } from "graphql";

export const createToken = ({ id }: { id: number }) => jwt.sign({ id }, "secret");

export const getUserFromToken = async (token: string, prisma: PrismaClient) => {
  if (token) {
    const user = jwt.verify(token, "secret") as TokenPayload;
    return await prisma.user.findUnique({ where: { id: user.user_id } });
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
