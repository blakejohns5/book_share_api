
import { GraphQLObjectType, GraphQLString, GraphQLInputObjectType, GraphQLList, GraphQLBoolean } from "graphql"

// User Type
const UserInput = new GraphQLInputObjectType({
  name: 'UserInput',
  fields: () => ({
    username: { type: GraphQLString },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    password: { type: GraphQLString },
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
    booksShared: { type: GraphQLList },
    booksBorrowed: { type: GraphQLList },
    active: { type: GraphQLBoolean }

  })
})


export {
  UserType
}