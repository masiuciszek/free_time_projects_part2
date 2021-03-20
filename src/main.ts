import { ApolloServer } from "apollo-server";
import { createContext } from "./context";
import { schema } from "./schema";

(() => {
  const port = { port: process.env.PORT || 4000 };

  const server = new ApolloServer({
    schema,
    context: createContext,
  });
  server.listen(port, () =>
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`),
  );
})();
