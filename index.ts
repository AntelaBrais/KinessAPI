import { makeExecutableSchema } from 'graphql-tools'
import express from 'express'
import graphqlHTTP from 'express-graphql'
import { readFileSync } from 'fs'
import { join } from 'path'
import { resolvers } from './lib/resolvers'

const app = express()

const port = process.env.port || 3000

const typeDefs = readFileSync(join(__dirname, 'lib', 'schema.graphql'), 'utf-8')
const schema = makeExecutableSchema({ typeDefs, resolvers })

app.use(
  '/api',
  graphqlHTTP({
    schema: schema,
    rootValue: resolvers,
    graphiql: true
  })
)

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}/api`)
})
