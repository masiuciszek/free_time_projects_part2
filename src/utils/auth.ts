import { PrismaClient, User } from "@prisma/client";
import jwt from "jsonwebtoken";
import { AuthenticationError } from "apollo-server-errors";
import { Dict, UnWrap, Context, TokenPayload } from "../types";
import bcrypt from "bcryptjs";
import { GraphQLArgs, GraphQLResolveInfo } from "graphql";
import { Request, Response } from "express";

export const hashPassword = async (password: string) => {
  const salt = await bcrypt.genSalt(8);
  return await bcrypt.hash(password, salt);
};

export const createToken = ({ id, role }: User) => {
  const token = jwt.sign({ userId: id, role }, "secret", { expiresIn: "12h" });
  return token;
};

// export const
