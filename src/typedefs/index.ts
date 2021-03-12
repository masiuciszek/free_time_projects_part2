import { gql } from "apollo-server-core";

const typeDefs = gql`
  enum DishTypeEnum {
    STARTER
    SIDE
    MAIN
    DESSERT
  }

  input CreateDishInput {
    id: ID!
    title: String!
    dishType: DishTypeEnum!
  }

  type Dish {
    name: String!
    dishType: DishTypeEnum!
  }

  type Query {
    foo: String
    allDishes: [Dish!]
  }

  type Mutation {
    addDish(dish: CreateDishInput!): Dish!
  }
`;
export { typeDefs };
