import { arg, extendType, intArg, nonNull } from "nexus";
import { Context } from "../context";

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
      type: "User",
      args: {
        input: nonNull(arg({ type: "RegisterUserInput" })),
      },
      resolve: async (_parent, args, { prisma }: Context) => {
        const isUsersExists = await prisma.user.findUnique({
          where: { email: args.input.email },
        });
        if (isUsersExists) {
          throw new Error("User already exists!");
        }

        return await prisma.user.create({
          data: {
            ...args.input,
          },
        });
      },
    });
  },
});
