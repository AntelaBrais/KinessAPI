import { makeExecutableSchema } from "graphql-tools"
import express from "express"
import graphqlHTTP from "express-graphql"
import { readFileSync } from "fs"
import { join } from "path"
import cors from "cors"
import { resolvers } from "./lib/resolvers"

import { ApolloServer, gql } from "apollo-server"

const app = express()

const port = process.env.port || 3000
const isDev = process.env.NODE_ENV !== "production"

const typeDefs = readFileSync(join(__dirname, "lib", "schema.graphql"), "utf-8")
const schema = makeExecutableSchema({ typeDefs, resolvers })

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  playground: true,
})

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`)
})
