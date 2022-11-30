
import { GraphQLObjectType, GraphQLString, GraphQLInputObjectType, GraphQLNonNull, GraphQLList, GraphQLBoolean } from "graphql"


// User Input Type
const UserInputType = new GraphQLInputObjectType({
  name: 'UserInput',
  fields: () => ({
    username: { type: new GraphQLNonNull(GraphQLString) },
    email: { type: new GraphQLNonNull(GraphQLString) },
    password: { type: new GraphQLNonNull(GraphQLString) },
  })
})



// User Type
const UserType = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    _id: { type: GraphQLString },
    username: { type: GraphQLString },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    password: { type: GraphQLString },
    // booksShared: { type: GraphQLList },
    // booksBorrowed: { type: GraphQLList },
    // active: { type: GraphQLBoolean }

  })
})


export {
  UserInputType,
  UserType
}