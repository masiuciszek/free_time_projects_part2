import { ApolloServer } from "apollo-server";
import { contextHandler as handleContext } from "./types";
import { resolvers } from "./resolvers";
// import { typeDefs } from "./typedefs";
import path from "path";
import fs from "fs";
// import { sendTokenToResolver } from "./utils/helpers";
import { getUserFromToken } from "./utils/auth";
import { PrismaClient } from "@prisma/client";

(() => {
  const typeDefs = fs.readFileSync(path.join(__dirname, "schema.graphql"), "utf8");
  const port = { port: process.env.PORT || 4000 };
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req, res }) => {
      const token = req.headers.authorization || "";
      const prisma = new PrismaClient();
      const context = handleContext(prisma);
      const user = getUserFromToken(token, prisma);

      return {
        ...context(req, res),
        user,
      };
    },
  });

  server.listen(port, () =>
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
  );
})();
