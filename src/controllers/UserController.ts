import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { User } from "../entities/User";
import { UserService } from "../services/UserService";

export class UserController {
  static async all(req: Request, res: Response) {
    const users = await UserService.getAllUsers();
    res.send(users);
  }

  static async create(req: Request, res: Response) {
    const user = await UserService.createUser(req.body);
    res.send(user);
  }
}
