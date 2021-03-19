import { PrismaClient } from "@prisma/client";
import { ContextHandler } from "./types";
import { Request, Response } from "express";

export const contextFn = (prisma: PrismaClient) => (
  req: Request,
  res: Response,
): ContextHandler => ({
  req,
  res,
  prisma,
});
