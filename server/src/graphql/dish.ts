import { objectType, enumType, inputObjectType } from "nexus";

export const DishType = enumType({
  name: "DishType",
  members: ["STARTER", "SIDE", "MAIN", "DESSERT"],
  description: "Dish type enum",
});

export const RatingType = enumType({
  name: "RatingType",
  description: "enum to generating rating for the dish",
  members: ["ONE", "TWO", "THREE", "FOUR", "FIVE"],
});

export const DishPayload = objectType({
  name: "DishPayload",
  definition(t) {
    t.boolean("success");
    t.field("dish", { type: "Dish" });
  },
});

export const CreateDishInput = inputObjectType({
  name: "CreateDishInput",
  definition(t) {
    t.nonNull.string("title");
    t.nullable.string("image");
    t.nonNull.field("rating", { type: "RatingType" });
    t.nonNull.field("dishType", { type: "DishType" });
  },
});

export const UpdateDishInput = inputObjectType({
  name: "UpdateDishInput",
  description: "input for updating an dish",
  definition(t) {
    t.nullable.string("title");
    t.nullable.string("image");
    t.nullable.int("id");
    t.nullable.field("rating", { type: "RatingType" });
    t.nullable.field("dishType", { type: "DishType" });
  },
});

export const Dish = objectType({
  name: "Dish",
  definition(t) {
    t.nonNull.int("id");
    t.nonNull.string("title");
    t.nonNull.field("rating", { type: "RatingType" });
    t.nonNull.field("dishType", { type: "DishType" });
    t.string("image");
    t.nonNull.field("author", { type: "User" });
    t.nonNull.field("createdAt", { type: "DateTime" });
  },
});
