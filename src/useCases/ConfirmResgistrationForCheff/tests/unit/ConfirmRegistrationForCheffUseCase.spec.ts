import { confirmRegistrationForCheffUseCaseFactory } from "../factories/ConfirmRegistrationForCheff";
import { NotFoundError } from "../../../../errors/NotFoundError";
import { confirmRegistrationForCheffUseCase } from "../../index";
import { cheffsRepository } from "../../../../repositories";
import { UnprocessableEntityError } from "../../../../errors/UnprocessableEntityError";

afterEach(() => {
  jest.clearAllMocks();
});

describe("ConfirmRegistrationForCheffUseCase", () => {
  it("should be able to confirm a registration for a pending cheff", async () => {
    const data = confirmRegistrationForCheffUseCaseFactory.getExecuteData();
    const cheff = {
      id: data.id,
      registerStatus: "pending"
    };

    const cheffsRepositoryFindById = jest
      .spyOn(cheffsRepository, "findById")
      .mockImplementationOnce(async () => cheff as any);

    const cheffsRepositoryUpdateStatus = jest
      .spyOn(cheffsRepository, "updateStatus")
      .mockImplementationOnce(async (): Promise<void> => {});

    const response = await confirmRegistrationForCheffUseCase.execute(data);

    expect(cheffsRepositoryFindById).toHaveBeenCalledTimes(1);
    expect(cheffsRepositoryUpdateStatus).toHaveBeenCalledTimes(1);
    expect(response).toEqual(undefined);
  });

  it("should not be able to confirm a registration for a cheff that does not exist", async () => {
    const data = confirmRegistrationForCheffUseCaseFactory.getExecuteData();

    const cheffsRepositoryFindById = jest
      .spyOn(cheffsRepository, "findById")
      .mockImplementationOnce(async () => null);

    const cheffsRepositoryUpdateStatus = jest.spyOn(
      cheffsRepository,
      "updateStatus"
    );

    const useCase = confirmRegistrationForCheffUseCase.execute(data);

    await expect(useCase)
      .rejects.toBeInstanceOf(NotFoundError)
      .catch((error) => {
        expect(error.statusCode).toBe(404);
        expect(error.message).toBe("Cheff not found");
      });

    expect(cheffsRepositoryFindById).toHaveBeenCalledTimes(1);
    expect(cheffsRepositoryUpdateStatus).toHaveBeenCalledTimes(0);
  });

  it("should not be able to confirm a registration for a cheff that is already approved", async () => {
    const data = confirmRegistrationForCheffUseCaseFactory.getExecuteData();
    const cheff = {
      id: data.id,
      registerStatus: "approved"
    };

    const cheffsRepositoryFindById = jest
      .spyOn(cheffsRepository, "findById")
      .mockImplementationOnce(async () => cheff as any);

    const cheffsRepositoryUpdateStatus = jest.spyOn(
      cheffsRepository,
      "updateStatus"
    );

    const useCase = confirmRegistrationForCheffUseCase.execute(data);

    await expect(useCase)
      .rejects.toBeInstanceOf(UnprocessableEntityError)
      .catch((error) => {
        expect(error.statusCode).toBe(422);
        expect(error.message).toBe("Cheff already approved");
      });

    expect(cheffsRepositoryFindById).toHaveBeenCalledTimes(1);
    expect(cheffsRepositoryUpdateStatus).toHaveBeenCalledTimes(0);
  });

  it("should not be able to confirm a registration for a cheff that is already rejected", async () => {
    const data = confirmRegistrationForCheffUseCaseFactory.getExecuteData();
    const cheff = {
      id: data.id,
      registerStatus: "rejected"
    };

    const cheffsRepositoryFindById = jest
      .spyOn(cheffsRepository, "findById")
      .mockImplementationOnce(async () => cheff as any);

    const cheffsRepositoryUpdateStatus = jest.spyOn(
      cheffsRepository,
      "updateStatus"
    );

    const useCase = confirmRegistrationForCheffUseCase.execute(data);

    await expect(useCase)
      .rejects.toBeInstanceOf(UnprocessableEntityError)
      .catch((error) => {
        expect(error.statusCode).toBe(422);
        expect(error.message).toBe("Cheff already rejected");
      });

    expect(cheffsRepositoryFindById).toHaveBeenCalledTimes(1);
    expect(cheffsRepositoryUpdateStatus).toHaveBeenCalledTimes(0);
  });
});
