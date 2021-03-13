import { PrismaClient } from "@prisma/client";
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
}

export interface Resolver {
  parent: null | undefined;
  args: any;
  ctx: Context;
  info?: GraphQLResolveInfo;
}

export type BasicArg<T> = {
  [key: string]: T;
};

export interface RegisterUserInput {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface Input<T> {
  [key: string]: T;
}

const contextHandler = (prisma: PrismaClient) => (req: Request, res: Response): Context => {
  return { req, res, prisma };
};

export const context = contextHandler(new PrismaClient());
