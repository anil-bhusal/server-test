import { getRepository } from "typeorm";
import { Product } from "../entities/Product";

export class ProductService {
  static async getAllProducts() {
    const productRepository = getRepository(Product);
    return productRepository.find();
  }

  static async createProduct(data: Partial<Product>) {
    const productRepository = getRepository(Product);
    const product = productRepository.create(data);
    return productRepository.save(product);
  }
}
