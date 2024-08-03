/* eslint-disable import/no-extraneous-dependencies */
import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { addMocksToSchema } from '@graphql-tools/mock';
import { makeExecutableSchema } from '@graphql-tools/schema';
import { faker } from '@faker-js/faker';

const typeDefs = `#graphql
  type UserType {
  """User ID"""
  id: String!

  """Login email"""
  email: String!

  """User is referred by"""
  ref: String!

  """User real name"""
  realName: String!

  """User display name"""
  displayName: String!

  """Mobile number"""
  mobile: String!

  """Wechat"""
  wechat: String!

  """QQ"""
  qq: String!
}

type Query {
  """Get all users"""
  getUsers: [UserType!]!

  """Find user by email"""
  getUserByEmail(email: String!): UserType!

  """Find user by id"""
  getUserById(id: String!): UserType!
}

type Mutation {
  """Create new user"""
  createUser(input: CreateUserInput!): Boolean!

  """Update user info"""
  updateUser(id: String!, input: UpdateUserInput!): Boolean!

  """Hard delete an user"""
  deleteUser(id: String!): Boolean!
}

input CreateUserInput {
  """Login email"""
  email: String!

  """User is referred by"""
  ref: String!

  """User real name"""
  realName: String!

  """User display name"""
  displayName: String!

  """Password"""
  password: String!

  """Mobile number"""
  mobile: String!
}

input UpdateUserInput {
  """User is referred by"""
  ref: String

  """User real name"""
  realName: String

  """User display name"""
  displayName: String

  """Password"""
  password: String

  """Mobile number"""
  mobile: String
}
`;

const resolvers = {
  UserType: {
    id: () => faker.string.uuid(),
    email: () => faker.internet.email(),
    ref: () => faker.internet.userName(),
    realName: () => faker.internet.userName(),
    displayName: () => faker.internet.displayName(),
    mobile: () => faker.phone.number(),
  },
};

const mocks = {
  Int: () => 6,
  Float: () => 22.1,
  String: () => 'hello',
};

const server = new ApolloServer({
  schema: addMocksToSchema({
    schema: makeExecutableSchema({ typeDefs, resolvers }),
    mocks,
    preserveResolvers: true,
  }),
});

startStandaloneServer(server, { listen: { port: 4200 } });

console.log('🚀 Server listening');
