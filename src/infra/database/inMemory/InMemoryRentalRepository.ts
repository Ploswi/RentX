import { IRentalRepository } from "../../../domain/repositories/IRentalRepository";
import { Rental } from "../../../domain/entities/Rental";

export class InMemoryRentalRepository implements IRentalRepository {
  private rentals: Rental[] = [];

  async findOpenRentalByCar(carId: string): Promise<Rental | null> {
    return this.rentals.find(r => r.carId === carId && !r.endDate) ?? null;
  }

  async findOpenRentalByUser(userId: string): Promise<Rental | null> {
    return this.rentals.find(r => r.userId === userId && !r.endDate) ?? null;
  }

  async create(rental: Rental): Promise<Rental> {
    this.rentals.push(rental);
    return rental;
  }
}