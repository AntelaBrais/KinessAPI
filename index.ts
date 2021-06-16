import { readFileSync } from "fs"
import { join } from "path"
import { resolvers } from "./lib/resolvers"
import { ApolloServer } from "apollo-server"

const typeDefs = readFileSync(join(__dirname, "lib", "schema.graphql"), "utf-8")

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  playground: true,
})

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`)
})
