import { inject, injectable } from "inversify";
import { differenceInHours } from "date-fns";
import { ICarRepository } from "../../../domain/repositories/ICarRepository";
import { IRentalRepository } from "../../../domain/repositories/IRentalRepository";
import { Rental } from "../../../domain/entities/Rental";
import { CreateRentalDTO } from "./CreateRentalDTO";
import { TYPES } from "../../../infra/container/types";

@injectable()
export class CreateRentalUseCase {
  constructor(
    @inject(TYPES.CarRepository)
    private carRepository: ICarRepository,

    @inject(TYPES.RentalRepository)
    private rentalRepository: IRentalRepository
  ) {}

  async execute(data: CreateRentalDTO): Promise<Rental> {
    const { userId, carId, expectedReturnDate } = data;

    const carRental = await this.rentalRepository.findOpenRentalByCar(carId);
    if (carRental) {
      throw new Error("Car already rented");
    }

    const userRental = await this.rentalRepository.findOpenRentalByUser(userId);
    if (userRental) {
      throw new Error("User already has an open rental");
    }

    const hours = differenceInHours(expectedReturnDate, new Date());
    if (hours < 24) {
      throw new Error("Rental must be at least 24 hours");
    }

    const rental = new Rental(
      crypto.randomUUID(),
      userId,
      carId,
      new Date(),
      expectedReturnDate
    );

    return this.rentalRepository.create(rental);
  }
}