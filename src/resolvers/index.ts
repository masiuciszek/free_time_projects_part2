import { dateScalar } from "../types/scaler";
import { Query } from "./query";
import { Mutation } from "./mutations";
const resolvers = {
  Date: dateScalar,
  Query,
  Mutation,
};

export { resolvers };
