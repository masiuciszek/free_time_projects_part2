import { makeSchema } from "nexus";
import { join } from "path";
// import { GraphQLDateTime } from "graphql-iso-date";

import * as types from "./graphql";

export const schema = makeSchema({
  types,
  outputs: {
    typegen: join(__dirname, "..", "nexus-typegen.ts"), // 2
    schema: join(__dirname, "..", "schema.graphql"), // 3
  },

  contextType: {
    module: require.resolve("./context"),
    export: "Context",
  },
});

// export const DateTime = asNexusMethod(GraphQLDateTime, "date");

// const Query = objectType({
//   name: "Query",
//   definition(t) {
//     t.nonNull.list.nonNull.field("allDishes", {
//       type: "Dish",
//     });
//   },
// });

// const Dish = objectType({
//   name: "Dish",
//   definition(t) {
//     t.nonNull.int("id");
//     t.nonNull.string("title")
//     t.nonNull.string
//   },
// });

// id: Int!
//   title: String!
//   dishType: DishTypeEnum!
//   rating: Int!
//   image: String
//   # ownerId: Int!
//   # author: User
//   # comments: [Comment]
//   createdAt: Date
