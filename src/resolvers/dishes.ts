import { BasicArg, Context } from "../types";
import { to } from "../utils/helpers";

const allDishes = async (parent: undefined, args: undefined, ctx: Context) => {
  const [err, dishes] = await to(ctx.prisma.dish.findMany());
  if (!dishes) {
    throw new Error("no dishes");
  }
  return dishes;
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
