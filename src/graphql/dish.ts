import { enumType, extendType, objectType } from "nexus";
import { Context } from "../context";

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
  },
});
