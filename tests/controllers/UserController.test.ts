import { Request, Response } from 'express';
import { UserController } from '../../src/controllers/UserController';
import { UserService } from '../../src/services/UserService';

describe('UserController', () => {
  it('should fetch all users', async () => {
    const mockRequest = {} as Request;
    const mockResponse = {
      send: jest.fn()
    } as unknown as Response;

    jest.spyOn(UserService, 'getAllUsers').mockResolvedValueOnce([
      { id: 1, name: 'Test User', email: 'testuser@example.com', password: 'password' }
    ]);

    await UserController.all(mockRequest, mockResponse);

    expect(mockResponse.send).toHaveBeenCalledWith([
      { id: 1, name: 'Test User', email: 'testuser@example.com', password: 'password' }
    ]);
  });

  it('should create a new user', async () => {
    const mockRequest = {
      body: {
        name: 'New User',
        email: 'newuser@example.com',
        password: 'password'
      }
    } as unknown as Request;
    const mockResponse = {
      send: jest.fn()
    } as unknown as Response;

    jest.spyOn(UserService, 'createUser').mockResolvedValueOnce({
      id: 2,
      name: 'New User',
      email: 'newuser@example.com',
      password: 'password'
    });

    await UserController.create(mockRequest, mockResponse);

    expect(mockResponse.send).toHaveBeenCalledWith({
      id: 2,
      name: 'New User',
      email: 'newuser@example.com',
      password: 'password'
    });
  });
});
