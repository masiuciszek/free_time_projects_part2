import { BasicArg, Context, Input, LoginInput, RegisterUserInput, TokenPayload } from "../types";
import {
  comparePassword,
  hashPassord,
  to,
  tokenHandler,
  toStr,
  verifyToken,
} from "../utils/helpers";

const allUsers = async (parent: undefined, args: undefined, ctx: Context) => {
  const [err, users] = await to(ctx.prisma.user.findMany());
  if (err) {
    console.error(err);
    throw new Error(`oops something wrong happend`);
  }
  return users;
};

const getUserById = async (_: undefined, { id }: BasicArg<string>, ctx: Context) => {
  const [__, jwtToken] = await to(Promise.resolve(ctx.authId));
  if (!jwtToken) {
    throw new Error("Auth error");
  }
  const { user_id } = verifyToken(toStr(jwtToken)) as TokenPayload;
  if (!user_id) {
    throw new Error("no user found");
  }

  const [___, user] = await to(ctx.prisma.user.findFirst({ where: { id: user_id } }));
  if (!user || !user?.id) {
    throw new Error(`could not find user with id ${id}`);
  }
  return user;
};

const registerUser = async (
  _: undefined,
  { userInput }: Input<RegisterUserInput>,
  ctx: Context,
) => {
  const hashedPassword = await hashPassord(userInput.password);

  const [err, user] = await to(
    ctx.prisma.user.create({
      data: {
        ...userInput,
        password: hashedPassword,
      },
    }),
  );
  if (!user) {
    throw new Error(`oops something wrong happend`);
  }

  let authToken;
  if (user && ctx.res) {
    const { token } = tokenHandler(user, ctx.res);
    authToken = token;
  }

  return { user, token: authToken };
};

const login = async (_: any, { loginInput }: Input<LoginInput>, ctx: Context) => {
  const [___, user] = await to(ctx.prisma.user.findUnique({ where: { email: loginInput.email } }));
  if (!user) {
    throw new Error(`no user with email ${loginInput.email}`);
  }
  const isValidPassword = await comparePassword(loginInput.password, user.password);
  if (!isValidPassword) {
    throw new Error(`Could not find user`);
  }
  let authToken;
  if (user && ctx.res) {
    const { token } = tokenHandler(user, ctx.res);
    authToken = token;
  }
  return { user, authToken };
};

export { allUsers, getUserById, registerUser, login };
