import { BasicArg, Context } from "../types";

const allDishes = async (parent: undefined, args: undefined, ctx: Context) => {
  try {
    return (await ctx.prisma.dish.findMany()) ?? [];
  } catch (err) {
    console.error(err);
  }
};

const getDishById = async (parent: undefined, { id }: BasicArg<string>, ctx: Context) => {
  try {
    const dish = await ctx.prisma.dish.findFirst({ where: { id: Number(id) } });
    return dish ? dish : new Error(`No dish found with id ${id}`);
  } catch (err) {
    console.error(err.message);
    throw new Error(`No dish found with id ${id}`);
  }
};

export { allDishes, getDishById };
