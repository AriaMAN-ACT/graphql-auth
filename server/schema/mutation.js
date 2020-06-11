const GraphQL = require('graphql');

const UserType = require('./types/UserType');
const AuthService = require('../services/auth');

const {
    GraphQLObjectType,
    GraphQLString
} = GraphQL;

const mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        signup: {
            type: UserType,
            args: {
                email: {
                    type: GraphQLString
                },
                password: {
                    type: GraphQLString
                }
            },
            resolve(parentValue, {email, password}, req) {
                return AuthService.signup({email, password, req});
            }
        },
        signout: {
            type: UserType,
            resolve(parentValue, args, req) {
                const {user} = req;
                req.logout();
                return user;
            }
        }
    }
});

module.exports = mutation;