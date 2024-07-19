import "reflect-metadata";
import express from "express";
import { ApolloServer } from "apollo-server-express";
import { createConnection } from "typeorm";
import ormconfig from "./config/ormconfig";
import typeDefs from "./schema/schema";
import resolvers from "./resolvers/resolvers";
import userRoutes from "./routes/userRoutes";
import productRoutes from "./routes/productRoutes";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use("/users", userRoutes);
app.use("/products", productRoutes);

const startServer = async () => {
  const apolloServer = new ApolloServer({ typeDefs, resolvers });
  await apolloServer.start();
  apolloServer.applyMiddleware({ app });

  createConnection(ormconfig).then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running at http://localhost:${PORT}`);
      console.log(`GraphQL endpoint is available at http://localhost:${PORT}${apolloServer.graphqlPath}`);
    });
  }).catch(error => console.log(error));
};

startServer();
