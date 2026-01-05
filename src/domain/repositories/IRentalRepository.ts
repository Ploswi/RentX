import { Rental } from "../entities/Rental";

export interface IRentalRepository {
  findOpenRentalByCar(carId: string): Promise<Rental | null>;
  findOpenRentalByUser(userId: string): Promise<Rental | null>;
  create(rental: Rental): Promise<Rental>;
}