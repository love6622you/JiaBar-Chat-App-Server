import { gql } from "apollo-server-express";

const typeDefs = gql`
  # Query | Mutation | Subscription
  type Query {
    users: [User]
    messagesByUser(receiverId: Int!): [Message]
  }
  
  type Mutation {
    signupUser(userNew: UserInput!): User
    signinUser(userSignin: UserSigninInput!): LoignResult
    createMessage(receiverId: Int!, text: String!): Message
  }
  
  type Subscription {
    messageAdded: Message
  }

  # Input
  input UserInput {
    firstName: String!
    lastName: String!
    email: String!
    password: String!
  }

  input UserSigninInput {
    email: String!
    password: String!
  }

  # Type
  type LoignResult {
    token: String!
    user: User!
  }

  scalar Date

  type Message {
    id: ID!
    text: String!
    receiverId: Int!
    senderId: Int!
    createdAt: Date!
  }

  type User {
    id: ID!
    firstName: String!
    lastName: String!
    email: String!
  }

`;

export default typeDefs;
