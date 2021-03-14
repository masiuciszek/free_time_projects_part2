import { ApolloServer } from "apollo-server";
import { context as handleContext } from "./types";
import { resolvers } from "./resolvers";
// import { typeDefs } from "./typedefs";
import path from "path";
import fs from "fs";
import { sendTokenToResolver } from "./utils/helpers";

(() => {
  const typeDefs = fs.readFileSync(path.join(__dirname, "schema.graphql"), "utf8");
  const port = { port: process.env.PORT || 4000 };
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req, res }) => {
      return {
        ...handleContext(req, res),
        authId: req && req.headers.authorization ? sendTokenToResolver(req) : false,
      };
    },
  });

  server.listen(port, () =>
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`),
  );
})();
