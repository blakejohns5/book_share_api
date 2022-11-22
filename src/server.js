import express from 'express';
import { graphqlHTTP } from 'express-graphql'
import schema from './schema/schema.js';
import { connectDB } from './db/index.js';
import CONFIG from './config/config.js'




const app = express();


app.use(express.json());
app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true,
}))


connectDB().then(async function onServerInit() {
  CONFIG.development.logger.info("Database CONNECTED");
  
  app.listen(CONFIG.development.app.PORT, () => {
    CONFIG.development.logger.info(
      `Server running at http://localhost:${CONFIG.development.app.PORT}`,
    );
  })

})


