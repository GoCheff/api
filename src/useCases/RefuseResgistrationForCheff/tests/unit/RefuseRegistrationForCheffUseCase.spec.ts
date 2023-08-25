import { refuseRegistrationForCheffUseCaseFactory } from "../factories/RefuseRegistrationForCheff";
import { NotFoundError } from "../../../../errors/NotFoundError";
import { refuseRegistrationForCheffUseCase } from "../../index";
import { cheffsRepository } from "../../../../repositories";
import { UnprocessableEntityError } from "../../../../errors/UnprocessableEntityError";

afterEach(() => {
  jest.clearAllMocks();
});

describe("RefuseRegistrationForCheffUseCase", () => {
  it("should be able to refuse a registration for a pending cheff", async () => {
    const data = refuseRegistrationForCheffUseCaseFactory.getExecuteData();
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

    const response = await refuseRegistrationForCheffUseCase.execute(data);

    expect(cheffsRepositoryFindById).toHaveBeenCalledTimes(1);
    expect(cheffsRepositoryUpdateStatus).toHaveBeenCalledTimes(1);
    expect(response).toEqual(undefined);
  });

  it("should not be able to refuse a registration for a cheff that does not exist", async () => {
    const data = refuseRegistrationForCheffUseCaseFactory.getExecuteData();

    const cheffsRepositoryFindById = jest
      .spyOn(cheffsRepository, "findById")
      .mockImplementationOnce(async () => null);

    const cheffsRepositoryUpdateStatus = jest.spyOn(
      cheffsRepository,
      "updateStatus"
    );

    const useCase = refuseRegistrationForCheffUseCase.execute(data);

    await expect(useCase)
      .rejects.toBeInstanceOf(NotFoundError)
      .catch((error) => {
        expect(error.statusCode).toBe(404);
        expect(error.message).toBe("Cheff not found");
      });

    expect(cheffsRepositoryFindById).toHaveBeenCalledTimes(1);
    expect(cheffsRepositoryUpdateStatus).toHaveBeenCalledTimes(0);
  });

  it("should not be able to refuse a registration for a cheff that is already approved", async () => {
    const data = refuseRegistrationForCheffUseCaseFactory.getExecuteData();
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

    const useCase = refuseRegistrationForCheffUseCase.execute(data);

    await expect(useCase)
      .rejects.toBeInstanceOf(UnprocessableEntityError)
      .catch((error) => {
        expect(error.statusCode).toBe(422);
        expect(error.message).toBe("Cheff already approved");
      });

    expect(cheffsRepositoryFindById).toHaveBeenCalledTimes(1);
    expect(cheffsRepositoryUpdateStatus).toHaveBeenCalledTimes(0);
  });

  it("should not be able to refuse a registration for a cheff that is already rejected", async () => {
    const data = refuseRegistrationForCheffUseCaseFactory.getExecuteData();
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

    const useCase = refuseRegistrationForCheffUseCase.execute(data);

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
