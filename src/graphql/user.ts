import { enumType, inputObjectType, objectType } from "nexus";

export const UserRole = enumType({
  name: "UserRole",
  members: ["USER", "ADMIN"],
  description: "User role",
});

export const AuthPayload = objectType({
  name: "AuthPayload",
  definition(t) {
    t.string("token");
    t.field("user", { type: "User" });
  },
});

export const RegisterUserInput = inputObjectType({
  name: "RegisterUserInput",
  definition(t) {
    t.nonNull.string("firstName");
    t.nullable.string("lastName");
    t.nonNull.string("email");
    t.nonNull.string("password");
    t.nullable.field("role", { type: "UserRole" });
  },
});

export const User = objectType({
  name: "User",
  definition(t) {
    t.nonNull.int("id");
    t.nonNull.string("firstName");
    t.nullable.string("lastName");
    t.nonNull.string("password");
    t.nonNull.string("email");
    t.list.nullable.field("dishes", { type: "Dish" });
    t.list.nullable.field("comments", { type: "Comment" });
    t.nonNull.field("createdAt", { type: "DateTime" });
  },
});
