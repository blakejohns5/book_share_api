import { GraphQLInputObjectType, GraphQLList, GraphQLObjectType, GraphQLString } from "graphql"

// Book Input Type
const BookInput = new GraphQLInputObjectType({
  name: "BookInput",
  fields: () => ({
    title: { type: GraphQLString },
    author: { type: GraphQLString },
  })
})

// Book Type
const BookType = new GraphQLObjectType({
  name: "Book",
  fields: () => ({    
    title: { type: GraphQLString },
    author: { type: GraphQLString },
    genre: { type: GraphQLString },
    binding: { type: GraphQLString },
    sharedBy: { type: GraphQLList },
    borrowedBy: { type: GraphQLList },
    currentlyBorrowedBy: { type: GraphQLObjectType }
  })
})



export {
  BookType
}