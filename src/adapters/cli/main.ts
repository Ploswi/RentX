import "reflect-metadata";
import { container } from "../../infra/container/container.prod";
import { CreateRentalUseCase } from "../../application/useCases/createRental/CreateRentalUseCase";

const useCase = container.resolve(CreateRentalUseCase);

useCase.execute({
  userId: "cli-user",
  carId: "cli-car",
  expectedReturnDate: new Date(Date.now() + 1000 * 60 * 60 * 24),
}).then(console.log);