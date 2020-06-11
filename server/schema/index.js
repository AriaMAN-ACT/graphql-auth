const graphql = require('graphql');
const { GraphQLSchema } = graphql;

const RootQueryType = require('./types/RootQueryType');
const Mutation = require('./mutation');

module.exports = new GraphQLSchema({
    query: RootQueryType,
    mutation: Mutation
});