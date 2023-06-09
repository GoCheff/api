import { createCheffFoodPlateUseCaseFactory } from "../factories/CreateCheffFoodPlate";
import { createCheffFoodPlateUseCase } from "../../index";
import { NotFoundError } from "../../../../errors/NotFoundError";
import { foodPlatesRepository } from "../../../../repositories/FoodPlates";
import { cheffsRepository } from "../../../../repositories";

afterEach(() => {
  jest.clearAllMocks();
});

describe("CreateCheffFoodPlateUseCase", () => {
  it("should be able to create a new food plate to a cheff", async () => {
    const cheffFoodPlate = createCheffFoodPlateUseCaseFactory.getExecuteData();
    const cheff = {
      id: cheffFoodPlate.cheffId
    };

    const cheffsRepositoryFindById = jest
      .spyOn(cheffsRepository, "findById")
      .mockImplementationOnce(async () => cheff as any);

    const foodPlatesRepositoryCreate = jest
      .spyOn(foodPlatesRepository, "create")
      .mockImplementationOnce(async () => cheffFoodPlate as any);

    const useCase = await createCheffFoodPlateUseCase.execute(cheffFoodPlate);

    expect(cheffsRepositoryFindById).toHaveBeenCalledTimes(1);
    expect(foodPlatesRepositoryCreate).toHaveBeenCalledTimes(1);
    expect(useCase).toEqual(undefined);
  });

  it("should throw an error if cheff not found", async () => {
    const cheffFoodPlate = createCheffFoodPlateUseCaseFactory.getExecuteData();

    const cheffsRepositoryFindById = jest
      .spyOn(cheffsRepository, "findById")
      .mockImplementationOnce(async () => null);

    const foodPlatesRepositoryCreate = jest.spyOn(
      foodPlatesRepository,
      "create"
    );

    await expect(createCheffFoodPlateUseCase.execute(cheffFoodPlate))
      .rejects.toBeInstanceOf(NotFoundError)
      .catch((error) => {
        expect(error.statusCode).toBe(404);
        expect(error.message).toBe("Cheff not found");
      });
    expect(cheffsRepositoryFindById).toHaveBeenCalledTimes(1);
    expect(foodPlatesRepositoryCreate).toHaveBeenCalledTimes(0);
  });
});
