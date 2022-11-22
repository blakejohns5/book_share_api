import { GraphQLList, GraphQLNonNull, GraphQLObjectType, GraphQLString, GraphQLInt  } from 'graphql';
import { getAllBooks, getAllUsers, getUserByEmail } from '../resolvers/index.js';
import { UserType, BookType } from '../types/index.js';

// Root Query
const RootQueryType = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    user: {
      type: UserType,
      args: {
        email: { type: GraphQLString },
      },
      resolve: getUserByEmail,
    },
    users: {
      type: new GraphQLList(UserType),
      resolve: getAllUsers,
    },
    books: {
      type: new GraphQLList(BookType),
      resolve: getAllBooks,
    }
  }
})


export default RootQueryType;