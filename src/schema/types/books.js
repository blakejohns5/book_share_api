import { GraphQLInputObjectType, GraphQLList, GraphQLNonNull, GraphQLObjectType, GraphQLString } from "graphql"

// Book Input Type
const BookInputType = new GraphQLInputObjectType({
  name: "BookInput",
  fields: () => ({
    title: { type: new GraphQLNonNull(GraphQLString) },
    author: { type: new GraphQLNonNull(GraphQLString) },
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
    // sharedBy: { type: GraphQLList },
    // borrowedBy: { type: GraphQLList },
    // currentlyBorrowedBy: { type: GraphQLObjectType }
  })
})



export {
  BookType,
  BookInputType,
}