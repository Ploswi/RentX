import "reflect-metadata";
import { CreateRentalUseCase } from "./CreateRentalUseCase";
import { createTestContainer } from "../../../infra/container/container.test";

describe("CreateRentalUseCase", () => {
  it("should create a rental", async () => {
    const container = createTestContainer();
    const useCase = container.resolve(CreateRentalUseCase);

    const rental = await useCase.execute({
      userId: "user1",
      carId: "car1",
      expectedReturnDate: new Date(Date.now() + 1000 * 60 * 60 * 24),
    });

    expect(rental).toHaveProperty("id");
  });
});