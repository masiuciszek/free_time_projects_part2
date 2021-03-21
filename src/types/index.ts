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

export interface FailedResponse {
  ok: boolean;
  msg: string;
}
export interface Context {
  prisma: PrismaClient;
  req: Request;
  res: Response;
  authResponse: User | boolean;
}

export interface Resolver {
  parent: UnWrap<Dict>;
  args: UnWrap<Dict>;
  context: Context;
  info: GraphQLResolveInfo;
}

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
  userId: number;
  iat: number;
  exp: number;
}

export type ContextHandler = Pick<Context, "prisma" | "req" | "res">;

export type UnWrap<T> = T extends infer R ? R : T;
export type Dict = Record<string, any>;

export type Role = "ADMIN" | "USER";
export type DishType = "STARTER" | "MAIN" | "SIDE" | "DESSERT";

enum Rating {
  "ONE",
  "TWO",
  "THREE",
  "FOUR",
  "FIVE",
}
export interface IMakeDishInput {
  title: string;
  rating: Rating;
  dishType: DishType;
  image?: string;
}
export interface IUpdateDishInput {
  id: number;
  title?: string;
  rating?: Rating;
  dishType?: DishType;
  image?: string;
}
