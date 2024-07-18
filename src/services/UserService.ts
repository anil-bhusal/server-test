import { getRepository } from "typeorm";
import { User } from "../entities/User";

export class UserService {
  static async getAllUsers() {
    const userRepository = getRepository(User);
    return userRepository.find();
  }

  static async createUser(data: Partial<User>) {
    const userRepository = getRepository(User);
    const user = userRepository.create(data);
    return userRepository.save(user);
  }
}
