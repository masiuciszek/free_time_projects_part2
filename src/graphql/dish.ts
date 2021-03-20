import {
  objectType,
  extendType,
  stringArg,
  nonNull,
  enumType,
  inputObjectType,
  arg,
  intArg,
} from "nexus";

import { Context } from "../context";
import { Input, IMakeDishInput, ArgsType, ArgType } from "../types";

export const DishType = enumType({
  name: "DishType",
  members: ["STARTER", "SIDE", "MAIN", "DESSERT"],
  description: "Dish type enum",
});

export const RatingType = enumType({
  name: "RatingType",
  description: "enum to generating rating for the dish",
  members: {
    ONE: 1,
    TWO: 2,
    THREE: 3,
    FOUR: 4,
    FIVE: 5,
  },
});

export const MakeDishInputType = inputObjectType({
  name: "MakeDishInputType",
  definition(t) {
    t.nonNull.string("title"), t.nonNull.field("rating", { type: "RatingType" });
    t.nonNull.field("dishType", { type: "DishType" });
  },
});

export const Dish = objectType({
  name: "Dish",
  definition(t) {
    t.int("id"),
      t.nonNull.field("rating", { type: "RatingType" }),
      t.nonNull.field("dishType", { type: "DishType" }),
      t.string("title");
  },
});

export const DishQuery = extendType({
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
      resolve: async (_parent, { id }: ArgType<number>, { prisma }: Context) => {
        return await prisma.dish.findUnique({ where: { id } });
      },
    });
  },
});

export const DishMutation = extendType({
  type: "Mutation",
  definition(t) {
    t.field("createDish", {
      type: "Dish",
      args: {
        MakeDishInputType: nonNull(arg({ type: "MakeDishInputType" })),
      },
      async resolve(_root, { MakeDishInputType }: Input<IMakeDishInput>, { prisma }: Context) {
        // todo / check if dish exists
        const dish = await prisma.dish.create({
          data: {
            ...MakeDishInputType,
          },
        });

        return dish;
      },
    });
  },
});
