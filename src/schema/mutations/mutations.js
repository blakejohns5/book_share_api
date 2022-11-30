import { GraphQLString, GraphQLObjectType, GraphQLNonNull, GraphQLInt } from "graphql"
import { BookType, BookInputType, UserInputType, UserType } from "../types/index.js";
import { createBook, createUser } from '../resolvers/index.js'




const RootMutationType = new GraphQLObjectType({
  name: 'RootMutation',
  description: 'Root Mutation',
  fields: () => ({
    createUser: {
      type: UserType,
      description: 'Add a User',
      args: {
        username: { type: GraphQLNonNull(GraphQLString) },
        email: { type: GraphQLNonNull(GraphQLString) },
        password: { type: GraphQLNonNull(GraphQLString) }
      },
      resolve: createUser,
    },
    createBook: {
      type: BookType,
      description: 'Add a book',
      args: {
        data: { type: new GraphQLNonNull(BookInputType) },
      },
      resolve: createBook,
    },
    
    // addAuthor: {
    //   type: AuthorType,
    //   description: 'Add an author',
    //   args: {
    //     name: { type: GraphQLNonNull(GraphQLString) },
    //   },
    //   resolve: (parent, args) => {
    //     const author = { id: authors.length + 1, name: args.name }`
    //     authors.push(author)
    //     return author
    //   }
    // }
  })
})


export default RootMutationType;