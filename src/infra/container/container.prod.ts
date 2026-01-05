import { Container } from "inversify";
import { TYPES } from "./types";
import { ICarRepository } from "../../domain/repositories/ICarRepository";
import { IRentalRepository } from "../../domain/repositories/IRentalRepository";
import { InMemoryCarRepository } from "../database/inMemory/InMemoryCarRepository";
import { InMemoryRentalRepository } from "../database/inMemory/InMemoryRentalRepository";

const container = new Container();

container.bind<ICarRepository>(TYPES.CarRepository).to(InMemoryCarRepository);
container.bind<IRentalRepository>(TYPES.RentalRepository).to(InMemoryRentalRepository);

export { container };