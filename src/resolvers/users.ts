import {
  BasicArg,
  Context,
  Dict,
  Input,
  UnWrap,
  LoginInput,
  RegisterUserInput,
  TokenPayload,
} from "../types";
import { to } from "../utils/async-handlers";
import { authenticated, comparePassword, createToken, throwAuthError } from "../utils/auth";
// import { comparePassword, getAuthId, tokenHandler, toStr, verifyToken } from "../utils/helpers";

// const allUsers = async (_: UnWrap<Dict>, __: UnWrap<Dict>, ctx: Context) => {
//   const [err, users] = await to(ctx.prisma.user.findMany());
//   if (err) {
//     console.error(err);
//     throw new Error(`oops something wrong happend`);
//   }
//   return users;
// };

// const getUserById = async (_: UnWrap<Dict>, { id }: BasicArg<string>, ctx: Context) => {
//   const [__, jwtToken] = await to(Promise.resolve(ctx.authId));
//   if (!jwtToken) {
//     throw new Error("Auth error");
//   }
//   const { user_id } = verifyToken(toStr(jwtToken)) as TokenPayload;
//   if (!user_id) {
//     throw new Error("no user found");
//   }

//   const [___, user] = await to(ctx.prisma.user.findFirst({ where: { id: user_id } }));
//   if (!user || !user?.id) {
//     throw new Error(`could not find user with id ${id}`);
//   }
//   return user;
// };

// const registerUser = async (
//   _: UnWrap<Dict>,
//   { userInput }: Input<RegisterUserInput>,
//   ctx: Context
// ) => {
//   const hashedPassword = await hashPassword(userInput.password);

//   const [err, user] = await to(
//     ctx.prisma.user.create({
//       data: {
//         ...userInput,
//         password: hashedPassword,
//       },
//     })
//   );
//   if (!user) {
//     throw new Error(`oops something wrong happend`);
//   }

//   let authToken;
//   if (user && ctx.res) {
//     const { token } = tokenHandler(user, ctx.res);
//     authToken = token;
//   }

//   return { user, token: authToken };
// };

// const login = async (_: UnWrap<Dict>, { loginInput }: Input<LoginInput>, ctx: Context) => {
//   const [___, user] = await to(ctx.prisma.user.findUnique({ where: { email: loginInput.email } }));
//   if (!user) {
//     throw new Error(`no user with email ${loginInput.email}`);
//   }
//   const isValidPassword = await comparePassword(loginInput.password, user.password);
//   if (!isValidPassword) {
//     throw new Error(`Could not find user`);
//   }
//   let authToken;
//   if (user && ctx.res) {
//     const { token } = tokenHandler(user, ctx.res);
//     authToken = token;
//   }
//   return { user, token: authToken };
// };

// const deleteMe = async (_: UnWrap<Dict>, __: UnWrap<Dict>, ctx: Context) => {
//   const { user_id } = await getAuthId(Number(ctx.authId));
//   const user = await ctx.prisma.user.findUnique({ where: { id: user_id } });
//   return user;
// };

const allUsers = async (
  _: UnWrap<Dict>,
  { loginInput }: Input<LoginInput>,
  { prisma }: Context
) => {
  const [__, users] = await to(prisma.user.findMany());
  if (!users) {
    return [];
  }
  return users;
};

const login = async (_: UnWrap<Dict>, { loginInput }: Input<LoginInput>, ctx: Context) => {
  const [__, user] = await to(ctx.prisma.user.findUnique({ where: { email: loginInput.email } }));

  if (!user) {
    throwAuthError();
    return;
  }
  const isValidPassword = await comparePassword(loginInput.password, user.password);

  if (!isValidPassword) {
    throwAuthError();
  }

  const token = createToken({ id: user.id });

  return { token, user };
};

const me = authenticated(async (_: UnWrap<Dict>, __: UnWrap<Dict>, ctx: Context) => {
  console.log(ctx.authResponse.valueOf());

  // return ctx.user;
});

export { me, login, allUsers };
// export { allUsers, getUserById, registerUser, login, deleteMe, me };
