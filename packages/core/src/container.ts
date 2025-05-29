import "reflect-metadata";
import { Container } from "inversify";
import TYPES from "./types";

import { UserRepository } from "./adapter/userRepository";
import { UserUsecase } from "./usecase/userUsecase";
import { UserService } from "./application/userService";

const container = new Container();

container.bind<UserRepository>(TYPES.UserRepository).to(UserRepository);  // ✅
container.bind<UserUsecase>(TYPES.UserUsecase).to(UserUsecase);          // ✅
container.bind<UserService>(TYPES.UserService).to(UserService);          // ✅

export { container };
