import { objectType } from "nexus";

export const Comment = objectType({
  name: "Comment",
  definition(t) {
    t.nonNull.field("dish", { type: "Dish" });
    t.nonNull.int("dishId");
    t.nonNull.int("ownerId");
    t.nonNull.field("author", { type: "User" });
  },
});
