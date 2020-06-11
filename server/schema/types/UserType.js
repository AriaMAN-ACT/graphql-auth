const GraphQL = require('graphql');

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLID
} = GraphQL;

const UserType = new GraphQLObjectType({
    name: 'UserType',
    fields: {
        id: {
            type: GraphQLID
        },
        email: {
            type: GraphQLString
        }
    }
});

module.exports = UserType;