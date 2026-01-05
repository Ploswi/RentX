import { ICarRepository } from "../../../domain/repositories/ICarRepository";
import { Car } from "../../../domain/entities/Car";

export class InMemoryCarRepository implements ICarRepository {
  private cars: Car[] = [];

  async findById(id: string): Promise<Car | null> {
    return this.cars.find(c => c.id === id) ?? null;
  }

  async update(car: Car): Promise<void> {
    this.cars.push(car);
  }
}