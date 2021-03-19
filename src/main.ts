import { ApolloServer } from "apollo-server";
import { resolvers } from "./resolvers";
// import { typeDefs } from "./typedefs";
import path from "path";
import fs from "fs";
// import { sendTokenToResolver } from "./utils/helpers";
import { PrismaClient } from "@prisma/client";
import { contextFn } from "./context";

(() => {
  const typeDefs = fs.readFileSync(path.join(__dirname, "schema.graphql"), "utf8");
  const port = { port: process.env.PORT || 4000 };
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req, res }) => {
      const prisma = new PrismaClient();
      const context = contextFn(prisma);
      return {
        ...context(req, res),
      };
    },
  });

  server.listen(port, () =>
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`),
  );
})();
