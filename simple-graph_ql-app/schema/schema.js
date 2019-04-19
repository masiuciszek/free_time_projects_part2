// graphql library not the express-graphql
const graphql = require('graphql');
// destructuring
const { GraphQLObjectType, GraphQLString, GraphQLInt } = graphql;
const _ = require('lodash');

// dummy data
const users = [
  { id: '1', name: 'Bill', age: 32 },
  { id: '2', name: 'Tina', age: 22 },
  { id: '3', name: 'Linda', age: 32 },
];

const UserType = new GraphQLObjectType({
  name: 'User',
  fields: {
    id: { type: GraphQLString },
    firstName: { type: GraphQLString },
    age: { type: GraphQLInt },
  },
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    user: {
      type: UserType,
      args: { id: { type: GraphQLString } },
      resolve(parentValue, args) {},
    },
  },
});
