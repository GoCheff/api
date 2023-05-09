import { NotFoundError } from "../../../../errors/NotFoundError";
import { getCheffUseCase } from "../../index";
import { getCheffUseCaseFactory } from "../factories/GetCheff";
import { cheffsRepository } from "../../../../repositories";

afterEach(() => {
  jest.clearAllMocks();
});

describe("GetCheffUseCase", () => {
  it("should be able to get a cheff with empty food plates", async () => {
    const cheffId = getCheffUseCaseFactory.getExecuteData();
    const cheff = await getCheffUseCaseFactory.getExecuteResponseData();
    const data = {
      ...cheff,
      id: cheffId
    };

    const cheffsRepositoryFindById = jest
      .spyOn(cheffsRepository, "findById")
      .mockImplementationOnce(async () => data as any);

    const useCase = await getCheffUseCase.execute(cheffId);

    expect(cheffsRepositoryFindById).toHaveBeenCalledTimes(1);
    expect(useCase).toEqual(data);
    expect(useCase.foodPlates).toEqual([]);
  });

  it("should be able to get a cheff with food plates", async () => {
    const cheffId = getCheffUseCaseFactory.getExecuteData();
    const cheff = await getCheffUseCaseFactory.getExecuteResponseData();
    const foodPlates = await getCheffUseCaseFactory.generateFoodPlates(cheffId);
    const data = {
      ...cheff,
      id: cheffId,
      foodPlates
    };

    const cheffsRepositoryFindById = jest
      .spyOn(cheffsRepository, "findById")
      .mockImplementationOnce(async () => data as any);

    const useCase = await getCheffUseCase.execute(cheffId);

    expect(cheffsRepositoryFindById).toHaveBeenCalledTimes(1);
    expect(useCase).toEqual(data);
    expect(useCase.foodPlates).toEqual(foodPlates);
  });

  it("should throw an error if cheff not found", async () => {
    const cheffId = getCheffUseCaseFactory.getExecuteData();

    const cheffsRepositoryFindById = jest
      .spyOn(cheffsRepository, "findById")
      .mockImplementationOnce(async () => null);

    await expect(getCheffUseCase.execute(cheffId))
      .rejects.toBeInstanceOf(NotFoundError)
      .catch((error) => {
        expect(error.message).toBe("Cheff not found");
      });
    expect(cheffsRepositoryFindById).toHaveBeenCalledTimes(1);
  });

  it("should throw an error if cheff is rejected", async () => {
    const { cheffId } = getCheffUseCaseFactory.getExecuteData();
    const cheff = await getCheffUseCaseFactory.getExecuteResponseData();
    const data = {
      ...cheff,
      id: cheffId
    };
    const cheffReturnNotApproved = await getCheffUseCaseFactory.rejectItCheff(
      data
    );

    const cheffsRepositoryFindById = jest
      .spyOn(cheffsRepository, "findById")
      .mockImplementationOnce(async () => cheffReturnNotApproved as any);

    await expect(getCheffUseCase.execute({ cheffId }))
      .rejects.toBeInstanceOf(NotFoundError)
      .catch((error) => {
        expect(error.message).toBe("Cheff not found");
      });
    expect(cheffsRepositoryFindById).toHaveBeenCalledTimes(1);
  });

  it("should throw an error if cheff is pending", async () => {
    const { cheffId } = getCheffUseCaseFactory.getExecuteData();
    const cheff = await getCheffUseCaseFactory.getExecuteResponseData();
    const data = {
      ...cheff,
      id: cheffId
    };
    const cheffReturnNotApproved =
      await getCheffUseCaseFactory.setItCheffToPending(data);

    const cheffsRepositoryFindById = jest
      .spyOn(cheffsRepository, "findById")
      .mockImplementationOnce(async () => cheffReturnNotApproved as any);

    await expect(getCheffUseCase.execute({ cheffId }))
      .rejects.toBeInstanceOf(NotFoundError)
      .catch((error) => {
        expect(error.message).toBe("Cheff not found");
      });
    expect(cheffsRepositoryFindById).toHaveBeenCalledTimes(1);
  });
});
