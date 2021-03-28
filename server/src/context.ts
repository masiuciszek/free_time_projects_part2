import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

export interface Context {
  req: Request;
  res: Response;
  prisma: PrismaClient;
}

// one instance
const prisma = new PrismaClient();

export function createContext(req: Request, res: Response) {
  return {
    ...req,
    ...res,
    prisma,
  };
}
