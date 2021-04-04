import { objectType, list } from "nexus";

export const CommentPayload = objectType({
  name: "CommentPayload",
  definition(t) {
    t.boolean("success");
    t.nullable.field("comment", { type: "Comment" });
  },
});

export const Comment = objectType({
  name: "Comment",
  definition(t) {
    t.nonNull.int("id");
    t.nullable.string("content");
    t.nonNull.int("dishId");
    t.nonNull.int("ownerId");
    t.nonNull.field("dish", { type: list("Dish") });
    t.nonNull.field("author", { type: "User" });
    t.field("createdAt", { type: "DateTime" });
  },
});
