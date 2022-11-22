import { GraphQLSchema  } from 'graphql';
import RootMutationType from './mutations/mutations.js';
import RootQueryType from './queries/queries.js';







// Schema
const schema = new GraphQLSchema({
  query: RootQueryType,
  mutation: RootMutationType,
})






export default schema;