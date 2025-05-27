import "reflect-metadata";
import { Container } from "inversify";
import { UserUsecase } from "./usecase/userUsecase";
import { UserRepository } from "./adapter/userRepository";
import { UserService } from "./application/userService";

const container = new Container();
container.bind(UserRepository).toSelf();
container.bind(UserUsecase).toSelf();
container.bind(UserService).toSelf();
export { container };
