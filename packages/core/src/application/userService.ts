import { inject, injectable } from "inversify";
import TYPES from "../types"; // ✅ import the symbols
import { z } from "zod";
import { UserUsecase } from "../usecase/userUsecase";

const AuthSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

@injectable()
export class UserService {
  constructor(
    @inject(TYPES.UserUsecase) private usecase: UserUsecase // ✅ USE SYMBOL
  ) {}

  async registerFromApi(input: unknown) {
    const parsed = AuthSchema.parse(input);
    return this.usecase.register(parsed.email, parsed.password);
  }

  async loginFromApi(input: unknown) {
    const parsed = AuthSchema.parse(input);
    return this.usecase.login(parsed.email, parsed.password);
  }

  async getUserById(id: string) {
    return this.usecase.getUser(id);
  }
}
