import { gql } from "apollo-server";

const typeDefs = gql`
  scalar Date

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
    id: Int!
    title: String!
    dishType: DishTypeEnum!
    rating: Int!
    image: String
    # ownerId: Int!
    # author: User
    # comments: [Comment]
    createdAt: Date
  }

  type Query {
    foo: String
    allDishes: [Dish]
  }

  type Mutation {
    addDish(dish: CreateDishInput!): Dish!
  }
`;
export { typeDefs };
