import { NotFoundError } from "../../../../errors/NotFoundError";
import { AppError } from "../../../../errors/AppError";
import { refuseCustomerCartUseCase } from "../..";
import { refuseCustomerCartUseCaseFactory } from "../factories/RefuseCustomerCart";
import { cartsRepository } from "../../../../repositories/Carts";

afterEach(() => {
  jest.clearAllMocks();
});

describe("RefuseCustomerCart", () => {
  it("should refuse customer cart", async () => {
    const data = refuseCustomerCartUseCaseFactory.getExecuteData();
    const cartReturn =
      await refuseCustomerCartUseCaseFactory.getExecuteResponseData();

    const cartsRepositoryFindById = jest
      .spyOn(cartsRepository, "findById")
      .mockImplementationOnce(async () => cartReturn);

    const cartsRepositoryUpdate = jest
      .spyOn(cartsRepository, "update")
      .mockImplementationOnce(async () => cartReturn);

    const useCase = await refuseCustomerCartUseCase.execute(data);

    expect(cartsRepositoryFindById).toHaveBeenCalledTimes(1);
    expect(cartsRepositoryUpdate).toHaveBeenCalledTimes(1);
    expect(useCase).toEqual(cartReturn);
  });

  it("should throw error if customer cart is not found", async () => {
    const data = refuseCustomerCartUseCaseFactory.getExecuteData();

    const cartsRepositoryFindById = jest
      .spyOn(cartsRepository, "findById")
      .mockImplementationOnce(async () => null);

    const cartsRepositoryUpdate = jest.spyOn(cartsRepository, "update");

    const useCase = refuseCustomerCartUseCase.execute(data);

    await expect(useCase)
      .rejects.toBeInstanceOf(NotFoundError)
      .catch((error) => {
        expect(error.statusCode).toBe(404);
        expect(error.message).toBe("Cart not found");
      });

    expect(cartsRepositoryFindById).toHaveBeenCalledTimes(1);
    expect(cartsRepositoryUpdate).toHaveBeenCalledTimes(0);
  });

  it("should throw error if customer cart is not sent", async () => {
    const data = refuseCustomerCartUseCaseFactory.getExecuteData();
    const cart =
      await refuseCustomerCartUseCaseFactory.getExecuteResponseData();
    cart.status = "open";

    const cartsRepositoryFindById = jest
      .spyOn(cartsRepository, "findById")
      .mockImplementationOnce(async () => cart);

    const cartsRepositoryUpdate = jest.spyOn(cartsRepository, "update");

    const useCase = refuseCustomerCartUseCase.execute(data);

    await expect(useCase)
      .rejects.toBeInstanceOf(AppError)
      .catch((error) => {
        expect(error.statusCode).toBe(409);
        expect(error.message).toBe("Cart is not sent");
      });

    expect(cartsRepositoryFindById).toHaveBeenCalledTimes(1);
    expect(cartsRepositoryUpdate).toHaveBeenCalledTimes(0);
  });
});
