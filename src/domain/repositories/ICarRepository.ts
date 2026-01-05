import { Car } from "../entities/Car";

export interface ICarRepository {
  findById(id: string): Promise<Car | null>;
  update(car: Car): Promise<void>;
}