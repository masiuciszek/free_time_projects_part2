import { AuthenticationError } from "apollo-server-errors";
import { arg, extendType, intArg, nonNull, stringArg } from "nexus";

import { Context } from "../context";
import { comparePassword, createToken, hashPassword, tokenHandler } from "../utils/auth";

export const Mutation = extendType({
  type: "Mutation",
  definition(t) {
    t.nullable.field("createDish", {
      type: "Dish",
      args: {
        CreateDishInput: nonNull(arg({ type: "CreateDishInput" })),
      },
      async resolve(_root, args, { prisma }: Context) {
        const isExisting = await prisma.dish.findUnique({
          where: { title: args.CreateDishInput.title },
        });
        if (isExisting) {
          throw new Error(`dish ${args.CreateDishInput.title} already exists`);
        }
        const dish = await prisma.dish.create({
          data: {
            ...args.CreateDishInput,
          },
        });
        return dish;
      },
    });
    t.field("updateDish", {
      type: "Dish",
      args: {
        updateDishInput: nonNull(
          arg({
            type: "UpdateDishInput",
          }),
        ),
      },
      async resolve(_root, { updateDishInput }, { prisma }: Context) {
        return await prisma.dish.update({
          where: { id: updateDishInput.id },
          data: { ...updateDishInput },
        });
      },
    });
    t.nonNull.field("deleteDish", {
      type: "Dish",
      args: {
        id: intArg({ description: "dish id to be able to remove the dish" }),
      },
      async resolve(_parent, { id }, { prisma }: Context) {
        const isThereAnDish = await prisma.dish.findUnique({ where: { id } });
        if (!isThereAnDish) {
          throw new Error("no dish with id " + id);
        }
        const dish = await prisma.dish.delete({
          where: { id },
        });

        return dish;
      },
    });

    t.field("register", {
      type: "AuthPayload",
      args: {
        input: nonNull(arg({ type: "RegisterUserInput" })),
      },
      resolve: async (_parent, args, { prisma, res }: Context) => {
        const isUsersExists = await prisma.user.findUnique({
          where: { email: args.input.email },
        });
        if (isUsersExists) {
          throw new Error("User already exists!");
        }
        const hashedPassword = await hashPassword(args.input.password);
        const user = await prisma.user.create({
          data: {
            ...args.input,
            password: hashedPassword,
          },
        });

        const token = createToken(user);
        tokenHandler(token, res);
        return { token, user };
      },
    });
    t.field("login", {
      type: "AuthPayload",
      args: {
        email: stringArg({ description: "unique email argument " }),
        password: stringArg({ description: "users password to be able to login " }),
      },
      resolve: async (_parent, args, { prisma, res }: Context) => {
        const user = await prisma.user.findUnique({
          where: {
            email: args.email,
          },
        });
        if (!user) {
          throw new AuthenticationError(`No user with ${args.email}`);
        }
        const isPasswordValid = await comparePassword(args.password, user.password);
        if (!isPasswordValid) {
          throw new AuthenticationError(`Auth error`);
        }
        const token = createToken(user);
        tokenHandler(token, res);
        return {
          token,
          user,
        };
      },
    });
  },
});
