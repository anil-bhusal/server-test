import { Request, Response } from "express";
import { ProductService } from "../services/ProductService";

export class ProductController {
  static async all(req: Request, res: Response) {
    const products = await ProductService.getAllProducts();
    res.send(products);
  }

  static async create(req: Request, res: Response) {
    const product = await ProductService.createProduct(req.body);
    res.send(product);
  }
}
