import { requestRegistrationForCheffUseCase } from "../../index";
import { cheffsRepository } from "../../../../repositories";
import { requestRegistrationForCheffUseCaseFactory } from "../../factories/RequestRegistrationForCheff";
import { UnprocessableEntityError } from "../../../../errors/UnprocessableEntityError";

afterEach(() => {
  jest.clearAllMocks();
});

describe("RequestRegistrationForCheffUseCase", () => {
  it("should request registration for cheff", async () => {
    const cheff = requestRegistrationForCheffUseCaseFactory.getExecuteData();

    const cheffsRepositoryFindByEmail = jest
      .spyOn(cheffsRepository, "findByEmail")
      .mockImplementationOnce(async () => null);

    const cheffsRepositoryCreate = jest
      .spyOn(cheffsRepository, "create")
      .mockImplementationOnce(async () => cheff as any);

    const useCase = await requestRegistrationForCheffUseCase.execute(cheff);

    expect(cheffsRepositoryFindByEmail).toHaveBeenCalledTimes(1);
    expect(cheffsRepositoryCreate).toHaveBeenCalledTimes(1);
    expect(useCase).toEqual(undefined);
  });

  it("should throw an error if cheff already exists", async () => {
    const cheff = requestRegistrationForCheffUseCaseFactory.getExecuteData();

    const cheffsRepositoryFindByEmail = jest
      .spyOn(cheffsRepository, "findByEmail")
      .mockImplementationOnce(async () => cheff as any);

    const cheffsRepositoryCreate = jest.spyOn(cheffsRepository, "create");

    const useCase = requestRegistrationForCheffUseCase.execute(cheff);

    await expect(useCase)
      .rejects.toBeInstanceOf(UnprocessableEntityError)
      .catch((error) => {
        expect(error.statusCode).toBe(422);
        expect(error.message).toBe("Cheff already exists");
      });

    expect(cheffsRepositoryFindByEmail).toHaveBeenCalledTimes(1);
    expect(cheffsRepositoryCreate).toHaveBeenCalledTimes(0);
  });
});
