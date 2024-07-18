import "reflect-metadata";
import express from "express";
import { createConnection } from "typeorm";
import ormconfig from "./config/ormconfig";
import userRoutes from "./routes/userRoutes";
import productRoutes from "./routes/productRoutes";
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use("/users", userRoutes);
app.use("/products", productRoutes);

let server: any;

createConnection(ormconfig).then(() => {
  server = app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
  });
}).catch(error => console.log(error));

export { app, server };
