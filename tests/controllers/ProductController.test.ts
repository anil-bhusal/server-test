import { Request, Response } from 'express';
import { ProductController } from '../../src/controllers/ProductController';
import { ProductService } from '../../src/services/ProductService';

describe('ProductController', () => {
  it('should fetch all products', async () => {
    const mockRequest = {} as Request;
    const mockResponse = {
      send: jest.fn()
    } as unknown as Response;

    jest.spyOn(ProductService, 'getAllProducts').mockResolvedValueOnce([
      { id: 1, name: 'Test Product', price: 99.99, description: 'Test description' }
    ]);

    await ProductController.all(mockRequest, mockResponse);

    expect(mockResponse.send).toHaveBeenCalledWith([
      { id: 1, name: 'Test Product', price: 99.99, description: 'Test description' }
    ]);
  });

  it('should create a new product', async () => {
    const mockRequest = {
      body: {
        name: 'New Product',
        price: 100,
        description: 'A new product'
      }
    } as unknown as Request;
    const mockResponse = {
      send: jest.fn()
    } as unknown as Response;

    jest.spyOn(ProductService, 'createProduct').mockResolvedValueOnce({
      id: 2,
      name: 'New Product',
      price: 100,
      description: 'A new product'
    });

    await ProductController.create(mockRequest, mockResponse);

    expect(mockResponse.send).toHaveBeenCalledWith({
      id: 2,
      name: 'New Product',
      price: 100,
      description: 'A new product'
    });
  });
});
