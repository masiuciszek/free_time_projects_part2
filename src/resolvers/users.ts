import { BasicArg, Context, Input, RegisterUserInput } from "../types";
import { hashPassord, to, tokenHandler } from "../utils/helpers";

const allUsers = async (parent: undefined, args: undefined, ctx: Context) => {
  const [err, users] = await to(ctx.prisma.user.findMany());
  if (err) {
    console.error(err);
    throw new Error(`oops something wrong happend`);
  }
  return users;
};

const getUserById = async (_: undefined, { id }: BasicArg<string>, ctx: Context) => {
  const [err, user] = await to(ctx.prisma.user.findFirst({ where: { id: Number(id) } }));
  if (err || !user?.id) {
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
  const hashedPassword = await hashPassord(password);

  const [err, user] = await to(
    ctx.prisma.user.create({
      data: {
        firstName,
        lastName,
        email,
        password: hashedPassword,
      },
    }),
  );
  if (err) {
    console.error(err);
    throw new Error(`oops something wrong happend`);
  }
  if (user && ctx.res) {
    tokenHandler(user, ctx.res);
  }

  return user;
};

export { allUsers, getUserById, registerUser };
