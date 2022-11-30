import { GraphQLList, GraphQLNonNull, GraphQLObjectType, GraphQLString, GraphQLInt  } from 'graphql';
import { getAllBooks, getAllUsers, getSingleUser, getSingleBook } from '../resolvers/index.js';
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
      resolve: getSingleUser,
    },
    users: {
      type: new GraphQLList(UserType),
      resolve: getAllUsers,
    },
    book: {
      type: BookType,
      args: {
        _id: { type: GraphQLString },
        title: { type: GraphQLString },
        author: { type: GraphQLString },
      },
      resolve: getSingleBook,
    },
    books: {
      type: new GraphQLList(BookType),
      resolve: getAllBooks,
    }
  }
})


export default RootQueryType;