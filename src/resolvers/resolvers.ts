import { UserService } from "../services/UserService";
import { ProductService } from "../services/ProductService";

const resolvers = {
  Query: {
    users: async () => {
      return await UserService.getAllUsers();
    },
    user: async (_: any, { id }: { id: number }) => {
      return await UserService.getUserById(id);
    },
    products: async () => {
      return await ProductService.getAllProducts();
    },
    product: async (_: any, { id }: { id: number }) => {
      return await ProductService.getProductById(id);
    },
  },
  Mutation: {
    createUser: async (_: any, { name, email, password }: { name: string, email: string, password: string }) => {
      return await UserService.createUser({ name, email, password });
    },
    createProduct: async (_: any, { name, price, description }: { name: string, price: number, description: string }) => {
      return await ProductService.createProduct({ name, price, description });
    },
  },
};

export default resolvers;
