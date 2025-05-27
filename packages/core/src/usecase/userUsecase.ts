import { inject, injectable } from "inversify";
import { UserRepository } from "../adapter/userRepository";
import bcrypt from "bcryptjs";

@injectable()
export class UserUsecase {
  constructor(@inject("UserRepository") private repo: UserRepository) {}

  async register(email: string, password: string) {
    const existing = await this.repo.findByEmail(email);
    if (existing) throw new Error("Already exists");

    const hashed = await bcrypt.hash(password, 10);
    return await this.repo.create(email, hashed);
  }

  async login(email: string, password: string) {
    const user = await this.repo.findByEmail(email);
    if (!user) throw new Error("Invalid credentials");

    const match = await bcrypt.compare(password, user.password);
    if (!match) throw new Error("Invalid credentials");

    return user;
  }

  async getUser(id: string) {
    return await this.repo.findById(id);
  }
}
