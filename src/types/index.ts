import { PrismaClient, User } from "@prisma/client";
import { Request, Response } from "express";
import { GraphQLResolveInfo } from "graphql";

export type FirstArgument<T> = T extends (arg1: infer U, ...args: any[]) => any ? U : any;
export type Remapped<T> = {
  [P in keyof T]: (
    parent: null | undefined,
    args: FirstArgument<[P]>,
    ctx: Context,
    info?: GraphQLResolveInfo,
  ) => any;
};

export interface Context {
  prisma: PrismaClient;
  req?: Request;
  res?: Response;
  user?: User;
}

export interface Resolver {
  parent: UnWrap<Dict>;
  args: UnWrap<Dict>;
  context: Context;
  info: GraphQLResolveInfo;
}

export type ParentType = Pick<Resolver, "parent">;
export type ArgsType = Pick<Resolver, "args">;
export type ContextType = Pick<Resolver, "context">;
export type InfoType = Pick<Resolver, "info">;
export type NextFnType = (
  parent: ParentType,
  args: ArgsType,
  context: Context,
  info: InfoType,
) => any;

export type BasicArg<T> = {
  [key: string]: T;
};

export interface RegisterUserInput {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}
export type LoginInput = Pick<RegisterUserInput, "email" | "password">;

export interface Input<T> {
  [key: string]: T;
}

export interface TokenPayload {
  user_id: number;
  iat: number;
  exp: number;
}

type ContextHandler = Pick<Context, "prisma" | "req" | "res">;

export const contextHandler = (prisma: PrismaClient) => (
  req: Request,
  res: Response,
): ContextHandler => {
  return { req, res, prisma };
};

export type UnWrap<T> = T extends infer R ? R : T;
export type Dict = Record<string, any>;

export type Role = "ADMIN" | "USER";
