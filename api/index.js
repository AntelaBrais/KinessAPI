"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var graphql_tools_1 = require("graphql-tools");
var express_1 = __importDefault(require("express"));
var express_graphql_1 = __importDefault(require("express-graphql"));
var fs_1 = require("fs");
var path_1 = require("path");
var cors_1 = __importDefault(require("cors"));
var resolvers_1 = require("./lib/resolvers");
var app = express_1["default"]();
var port = process.env.port || 3000;
var isDev = process.env.NODE_ENV !== 'production';
var typeDefs = fs_1.readFileSync(path_1.join(__dirname, 'lib', 'schema.graphql'), 'utf-8');
var schema = graphql_tools_1.makeExecutableSchema({ typeDefs: typeDefs, resolvers: resolvers_1.resolvers });
app.use(cors_1["default"]());
app.use('/api', express_graphql_1["default"]({
    schema: schema,
    rootValue: resolvers_1.resolvers,
    graphiql: isDev
}));
app.listen(port, function () {
    console.log("Server is listening at http://localhost:" + port + "/api");
});
