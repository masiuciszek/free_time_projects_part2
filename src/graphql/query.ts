import { extendType, intArg, stringArg } from "nexus";
import { Context } from "../context";

export const Query = extendType({
  type: "Query",
  definition(t) {
    t.nonNull.list.field("dishes", {
      type: "Dish",
      async resolve(_root, _args, ctx: Context) {
        return await ctx.prisma.dish.findMany();
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
  },
});
