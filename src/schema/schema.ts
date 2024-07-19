import { gql } from "apollo-server-express";

const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    email: String!
  }

  type Product {
    id: ID!
    name: String!
    price: Float!
    description: String!
  }

  type Query {
    users: [User!]
    user(id: ID!): User
    products: [Product!]
    product(id: ID!): Product
  }

  type Mutation {
    createUser(name: String!, email: String!, password: String!): User
    createProduct(name: String!, price: Float!, description: String!): Product
  }
`;

export default typeDefs;
