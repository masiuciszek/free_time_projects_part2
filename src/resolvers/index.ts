import { dateScalar } from "../types/scaler";
import { Query } from "./query";

const resolvers = {
  Date: dateScalar,
  Query,
};

export { resolvers };
