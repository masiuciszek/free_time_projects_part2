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
import { Input, IMakeDishInput, ArgType } from "../types";

export const DishType = enumType({
  name: "DishType",
  members: ["STARTER", "SIDE", "MAIN", "DESSERT"],
  description: "Dish type enum",
});

export const RatingType = enumType({
  name: "RatingType",
  description: "enum to generating rating for the dish",
  members: ["ONE", "TWO", "THREE", "FOUR", "FIVE"],
});

export const MakeDishInput = inputObjectType({
  name: "MakeDishInput",
  definition(t) {
    t.nonNull.string("title"),
      t.nullable.string("image"),
      t.nullable.int("ownerId"),
      t.nonNull.field("rating", { type: "RatingType" });
    t.nonNull.field("dishType", { type: "DishType" });
  },
});

export const UpdateDishInput = inputObjectType({
  name: "UpdateDishInput",
  description: "input for updating an dish",
  definition(t) {
    t.nullable.string("title"),
      t.nullable.string("image"),
      t.nullable.int("id"),
      t.nullable.field("rating", { type: "RatingType" });
    t.nullable.field("dishType", { type: "DishType" });
  },
});

export const Dish = objectType({
  name: "Dish",
  definition(t) {
    t.nonNull.int("id"), t.nonNull.string("title");
    t.nonNull.field("rating", { type: "RatingType" }),
      t.nonNull.field("dishType", { type: "DishType" });
    t.string("image");
    t.nonNull.field("createdAt", { type: "DateTime" });
  },
});

// image String?
// ownerId  Int?
// ingredients Ingredient[]
// author    User?    @relation(fields: [ownerId], references: [id])
// comments   Comment[] // A post can have many comments
// createdAt   DateTime @default(now())

export const Query = objectType({
  name: "Query",
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
              startsWith: searchString,
            },
          },
        });
      },
    });
  },
});

export const Mutation = objectType({
  name: "Mutation",
  definition(t) {
    t.nullable.field("createDish", {
      type: "Dish",
      args: {
        MakeDishInput: nonNull(arg({ type: "MakeDishInput" })),
      },
      async resolve(_root, args, { prisma }: Context) {
        const isExisting = await prisma.dish.findUnique({
          where: { title: args.MakeDishInput.title },
        });
        if (isExisting) {
          throw new Error(`dish ${args.MakeDishInput.title} already exists`);
        }
        const dish = await prisma.dish.create({
          data: {
            ...args.MakeDishInput,
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
            type: UpdateDishInput,
          }),
        ),
      },
      async resolve(_root, { updateDishInput }, { prisma }: Context) {
        console.log(updateDishInput);
        return await prisma.dish.update({
          where: { id: updateDishInput.id },
          data: { ...updateDishInput },
        });
      },
    });
  },
});
