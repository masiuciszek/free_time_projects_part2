import { BasicArg, Context, Input, RegisterUserInput } from "../types";
import { to } from "../utils/helpers";

const allUsers = async (parent: undefined, args: undefined, ctx: Context) => {
  const [err, users] = await to(ctx.prisma.user.findMany());
  if (Boolean(err)) {
    console.error(err);
    throw new Error(`ooopas something wrong happend`);
  }
  return users;
};

const getUserById = async (_: undefined, { id }: BasicArg<string>, ctx: Context) => {
  const [err, user] = await to(ctx.prisma.user.findFirst({ where: { id: Number(id) } }));
  if (Boolean(err) || !user?.id) {
    console.error(err);
    throw new Error(`could not find user with id ${id}`);
  }
  return user;
};

const registerUser = async (
  _: undefined,
  { userInput: { firstName, lastName, email, password } }: Input<RegisterUserInput>,
  ctx: Context,
) => {
  const [err, user] = await to(
    ctx.prisma.user.create({
      data: {
        firstName,
        lastName,
        email,
        password,
      },
    }),
  );
  if (Boolean(err)) {
    console.error(err);
    throw new Error(`ooopas something wrong happend`);
  }
  return user;
};

export { allUsers, getUserById, registerUser };
