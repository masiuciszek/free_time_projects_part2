import { AuthenticationError } from "apollo-server-errors";
import { arg, extendType, intArg, nonNull, stringArg } from "nexus";
import { Context } from "../context";
import { comparePassword, createToken, getUserId, hashPassword, tokenHandler } from "../utils/auth";

export const Mutation = extendType({
  type: "Mutation",
  definition(t) {
    // Dish
    t.nullable.field("createDish", {
      type: "Dish",
      args: {
        CreateDishInput: nonNull(arg({ type: "CreateDishInput" })),
      },
      async resolve(_root, args, ctx: Context) {
        const userId = getUserId(ctx);
        if (!userId) {
          throw new AuthenticationError(`you are not authenticated`);
        }
        const isExisting = await ctx.prisma.dish.findUnique({
          where: { title: args.CreateDishInput.title },
        });
        if (isExisting) {
          throw new Error(`dish ${args.CreateDishInput.title} already exists`);
        }
        const dish = await ctx.prisma.dish.create({
          data: {
            ...args.CreateDishInput,
          },
          include: { author: true },
        });
        return dish;
      },
    });
    t.field("updateDish", {
      type: "DishPayload",
      args: {
        UpdateDishInput: nonNull(
          arg({
            type: "UpdateDishInput",
          }),
        ),
      },

      async resolve(_root, { UpdateDishInput }, ctx: Context) {
        const userId = getUserId(ctx);
        if (!userId) {
          throw new AuthenticationError(`you are not authenticated`);
        }

        let dish = await ctx.prisma.dish.findUnique({
          where: { id: UpdateDishInput.id },
          include: { author: true },
        });

        if (!dish) {
          throw new Error("There where no dish");
        }
        if (dish.author?.id !== userId) {
          throw new AuthenticationError(`you are not authenticated`);
        }

        dish = await ctx.prisma.dish.update({
          where: { id: UpdateDishInput.id },
          data: { ...UpdateDishInput },
          include: { author: true },
        });

        return { success: true, dish };
      },
    });

    t.nonNull.field("deleteDish", {
      type: "DishPayload",
      args: {
        id: intArg({ description: "dish id to be able to remove the dish" }),
      },
      async resolve(_parent, { id }, ctx: Context) {
        const userId = getUserId(ctx);
        if (!userId) {
          throw new AuthenticationError(`you are not authenticated`);
        }

        let dish = await ctx.prisma.dish.findUnique({
          where: { id },
          include: { author: true },
        });

        if (dish?.author?.id !== userId) {
          throw new AuthenticationError("You have not permission to delete this dish");
        }
        dish = await ctx.prisma.dish.delete({
          where: { id },
          include: { author: true },
        });

        return { success: true, dish };
      },
    });
    // USER
    t.field("register", {
      type: "AuthPayload",
      args: {
        Input: nonNull(arg({ type: "RegisterUserInput" })),
      },
      resolve: async (_parent, args, { prisma, res }: Context) => {
        const isUsersExists = await prisma.user.findUnique({
          where: { email: args.Input.email },
        });
        if (isUsersExists) {
          throw new Error("User already exists!");
        }
        const hashedPassword = await hashPassword(args.Input.password);
        const user = await prisma.user.create({
          data: {
            ...args.Input,
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
    t.field("updateMe", {
      type: "User",
      args: {
        Input: arg({ type: "UpdateMeInput" }),
      },
      resolve: async (_root, args, ctx: Context) => {
        const userId = getUserId(ctx);
        if (!userId) {
          throw new AuthenticationError("you are not authenticated");
        }

        if (Boolean(args.Input.password)) {
          const hashedPassword = await hashPassword(args.Input.password);
          return await ctx.prisma.user.update({
            where: { id: userId },
            data: {
              ...args.Input,
              password: hashedPassword,
            },
          });
        }

        return await ctx.prisma.user.update({
          where: { id: userId },
          data: {
            ...args.Input,
          },
        });
      },
    });
  },
});
