import { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({ name: "John Doe" });
};

// import { ApolloServer } from 'apollo-server-micro'
// import { schema } from '../../lib/schema'

// const apolloServer = new ApolloServer({ schema })

// export const config = {
//   api: {
//     bodyParser: false,
//   },
// }

// export default apolloServer.createHandler({ path: '/api/graphql' })
