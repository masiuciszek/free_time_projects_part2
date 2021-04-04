import { extendType, intArg, stringArg } from "nexus";
import { Context } from "../context";
import { getUserId } from "../utils/auth";
import { AuthenticationError } from "apollo-server-errors";
import { resolve } from "node:path";

export const Query = extendType({
  type: "Query",
  definition(t) {
    t.nonNull.list.field("dishes", {
      type: "Dish",
      async resolve(_root, _args, ctx: Context) {
        return await ctx.prisma.dish.findMany({ include: { author: true, comments: true } });
      },
    });
    t.nullable.field("dishById", {
      type: "Dish",
      args: {
        id: intArg(),
      },
      resolve: async (_parent, { id }, { prisma }: Context) => {
        return await prisma.dish.findUnique({ where: { id } });
      },
    });

    t.list.field("filterDishes", {
      type: "Dish",
      args: {
        searchString: stringArg(),
      },
      resolve: async (_parent, { searchString }, { prisma }: Context) => {
        return await prisma.dish.findMany({
          where: {
            title: {
              contains: searchString,
            },
          },
        });
      },
    });
    t.list.field("users", {
      type: "User",
      resolve: async (_parent, _args, { prisma }: Context) => {
        return await prisma.user.findMany();
      },
    });
    t.field("me", {
      type: "User",
      resolve: async (_parent, _args, ctx: Context) => {
        const userId = getUserId(ctx);
        if (!userId) {
          throw new AuthenticationError(`you are not authenticated`);
        }
        return await ctx.prisma.user.findUnique({
          where: {
            id: userId,
          },
        });
      },
    });
    t.nonNull.list.field("comments", {
      type: "Comment",
      async resolve(_root, _args, ctx: Context) {
        return await ctx.prisma.comment.findMany({ include: { author: true, dish: true } });
      },
    });
  },
});
