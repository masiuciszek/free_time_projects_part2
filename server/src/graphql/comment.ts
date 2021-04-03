import { objectType } from "nexus";

export const Comment = objectType({
  name: "Comment",
  definition(t) {
    t.nonNull.string("text", { deprecation: "comments content" });
    t.nonNull.field("dish", { type: "Dish" });
    t.nonNull.int("dishId");
    t.nonNull.int("ownerId");
    t.nonNull.field("createdAt", { type: "DateTime" });
    t.nonNull.field("author", { type: "User" });
  },
});
