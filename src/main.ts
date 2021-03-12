import { ApolloServer } from "apollo-server";
import { context } from "./context";
import { resolvers } from "./resolvers";
import { typeDefs } from "./typedefs";

(() => {
  const port = { port: process.env.PORT || 4000 };

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req, res }) => ({ req, res, context }),
  });

  server.listen(port, () =>
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
  );
})();
