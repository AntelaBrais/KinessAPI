import { makeExecutableSchema } from 'graphql-tools'
import express from 'express'
import graphqlHTTP from 'express-graphql'
import { readFileSync } from 'fs'
import { join } from 'path'
import cors from 'cors'
import { resolvers } from './src/resolvers'

const app = express()

const port = process.env.port || 3000
const isDev = process.env.NODE_ENV !== 'production'

const typeDefs = readFileSync(join(__dirname, 'lib', 'schema.graphql'), 'utf-8')
const schema = makeExecutableSchema({ typeDefs, resolvers })

app.use(cors())

app.use(
  '/api',
  graphqlHTTP({
    schema: schema,
    rootValue: resolvers,
    graphiql: true
  })
)

// Home route
app.get('/', (req, res) => {
  res.send('Welcome to a basic express App')
})

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}/api`)
})
