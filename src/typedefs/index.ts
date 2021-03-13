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

  input CreateUserInput {
    firstName: String!
    lastName: String
    email: String!
    password: String!
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

  type User {
    id: Int!
    email: String!
    firstName: String!
    lastName: String
    password: String!
    createdAt: Date
    # dishes Dish[]
    # comments Comment[] // A post can have many comments
  }

  type Query {
    # dishes
    allDishes: [Dish]
    getDishById(id: Int!): Dish
    # users
    allUsers: [User]
    getUserById(id: Int!): User
  }

  type Mutation {
    # dishes
    addDish(dish: CreateDishInput!): Dish!
    # users
    registerUser(userInput: CreateUserInput!): User!
  }
`;
export { typeDefs };
