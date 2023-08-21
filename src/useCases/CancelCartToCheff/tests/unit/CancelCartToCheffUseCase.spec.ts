import { NotFoundError } from "../../../../errors/NotFoundError";
import { AppError } from "../../../../errors/AppError";
import { cancelCartToCheffUseCase } from "../..";
import { cancelCartToCheffUseCaseFactory } from "../factories/CancelCartToCheff";
import { cartsRepository } from "../../../../repositories/Carts";

afterEach(() => {
  jest.clearAllMocks();
});

describe("CancelCartToCheffUseCase", () => {
  it("should cancel cart to cheff", async () => {
    const data = cancelCartToCheffUseCaseFactory.getExecuteData();
    const cartReturn =
      await cancelCartToCheffUseCaseFactory.getExecuteResponseData();

    const cartsRepositoryFindById = jest
      .spyOn(cartsRepository, "findById")
      .mockImplementationOnce(async () => cartReturn);

    const cartsRepositoryUpdate = jest
      .spyOn(cartsRepository, "update")
      .mockImplementationOnce(async () => cartReturn);

    const useCase = await cancelCartToCheffUseCase.execute(data);

    expect(cartsRepositoryFindById).toHaveBeenCalledTimes(1);
    expect(cartsRepositoryUpdate).toHaveBeenCalledTimes(1);
    expect(useCase).toEqual(cartReturn);
  });

  it("should not cancel cart to cheff if cart does not exists", async () => {
    const data = cancelCartToCheffUseCaseFactory.getExecuteData();

    const cartsRepositoryFindById = jest
      .spyOn(cartsRepository, "findById")
      .mockImplementationOnce(async () => null);

    const cartsRepositoryUpdate = jest.spyOn(cartsRepository, "update");

    const useCase = cancelCartToCheffUseCase.execute(data);

    await expect(useCase)
      .rejects.toBeInstanceOf(NotFoundError)
      .catch((error) => {
        expect(error.statusCode).toBe(404);
        expect(error.message).toBe("Cart not found");
      });

    expect(cartsRepositoryFindById).toHaveBeenCalledTimes(1);
    expect(cartsRepositoryUpdate).toHaveBeenCalledTimes(0);
  });

  it("should cancel cart to cheff if cart is in the status of 'sent'", async () => {
    const data = cancelCartToCheffUseCaseFactory.getExecuteData();
    const cart = await cancelCartToCheffUseCaseFactory.getExecuteResponseData();
    cart.status = "sent";

    const cartsRepositoryFindById = jest
      .spyOn(cartsRepository, "findById")
      .mockImplementationOnce(async () => cart);

    const cartsRepositoryUpdate = jest
      .spyOn(cartsRepository, "update")
      .mockImplementationOnce(async () => cart);

    const useCase = await cancelCartToCheffUseCase.execute(data);

    expect(cartsRepositoryFindById).toHaveBeenCalledTimes(1);
    expect(cartsRepositoryUpdate).toHaveBeenCalledTimes(1);
    expect(useCase).toEqual(cart);
  });

  it("should cancel cart to cheff if cart is in the status of 'approved'", async () => {
    const data = cancelCartToCheffUseCaseFactory.getExecuteData();
    const cart = await cancelCartToCheffUseCaseFactory.getExecuteResponseData();
    cart.status = "approved";

    const cartsRepositoryFindById = jest
      .spyOn(cartsRepository, "findById")
      .mockImplementationOnce(async () => cart);

    const cartsRepositoryUpdate = jest
      .spyOn(cartsRepository, "update")
      .mockImplementationOnce(async () => cart);

    const useCase = await cancelCartToCheffUseCase.execute(data);

    expect(cartsRepositoryFindById).toHaveBeenCalledTimes(1);
    expect(cartsRepositoryUpdate).toHaveBeenCalledTimes(1);
    expect(useCase).toEqual(cart);
  });

  it("should not cancel cart to cheff if cart is in the status of 'rejected'", async () => {
    const data = cancelCartToCheffUseCaseFactory.getExecuteData();
    const cart = await cancelCartToCheffUseCaseFactory.getExecuteResponseData();
    cart.status = "rejected";

    const cartsRepositoryFindById = jest
      .spyOn(cartsRepository, "findById")
      .mockImplementationOnce(async () => cart);

    const cartsRepositoryUpdate = jest.spyOn(cartsRepository, "update");

    const useCase = cancelCartToCheffUseCase.execute(data);

    await expect(useCase)
      .rejects.toBeInstanceOf(AppError)
      .catch((error) => {
        expect(error.statusCode).toBe(409);
        expect(error.message).toBe("Cart is not available to cancel");
      });

    expect(cartsRepositoryFindById).toHaveBeenCalledTimes(1);
    expect(cartsRepositoryUpdate).toHaveBeenCalledTimes(0);
  });

  it("should not cancel cart to cheff if cart is in the status of 'paid'", async () => {
    const data = cancelCartToCheffUseCaseFactory.getExecuteData();
    const cart = await cancelCartToCheffUseCaseFactory.getExecuteResponseData();
    cart.status = "paid";

    const cartsRepositoryFindById = jest
      .spyOn(cartsRepository, "findById")
      .mockImplementationOnce(async () => cart);

    const cartsRepositoryUpdate = jest.spyOn(cartsRepository, "update");

    const useCase = cancelCartToCheffUseCase.execute(data);

    await expect(useCase)
      .rejects.toBeInstanceOf(AppError)
      .catch((error) => {
        expect(error.statusCode).toBe(409);
        expect(error.message).toBe("Cart is not available to cancel");
      });

    expect(cartsRepositoryFindById).toHaveBeenCalledTimes(1);
    expect(cartsRepositoryUpdate).toHaveBeenCalledTimes(0);
  });

  it("should not cancel cart to cheff if cart is in the status of 'canceled'", async () => {
    const data = cancelCartToCheffUseCaseFactory.getExecuteData();
    const cart = await cancelCartToCheffUseCaseFactory.getExecuteResponseData();
    cart.status = "canceled";

    const cartsRepositoryFindById = jest
      .spyOn(cartsRepository, "findById")
      .mockImplementationOnce(async () => cart);

    const cartsRepositoryUpdate = jest.spyOn(cartsRepository, "update");

    const useCase = cancelCartToCheffUseCase.execute(data);

    await expect(useCase)
      .rejects.toBeInstanceOf(AppError)
      .catch((error) => {
        expect(error.statusCode).toBe(409);
        expect(error.message).toBe("Cart is not available to cancel");
      });

    expect(cartsRepositoryFindById).toHaveBeenCalledTimes(1);
    expect(cartsRepositoryUpdate).toHaveBeenCalledTimes(0);
  });

  it("should not cancel cart to cheff if cart is in the status of 'delivered'", async () => {
    const data = cancelCartToCheffUseCaseFactory.getExecuteData();
    const cart = await cancelCartToCheffUseCaseFactory.getExecuteResponseData();
    cart.status = "delivered";

    const cartsRepositoryFindById = jest
      .spyOn(cartsRepository, "findById")
      .mockImplementationOnce(async () => cart);

    const cartsRepositoryUpdate = jest.spyOn(cartsRepository, "update");

    const useCase = cancelCartToCheffUseCase.execute(data);

    await expect(useCase)
      .rejects.toBeInstanceOf(AppError)
      .catch((error) => {
        expect(error.statusCode).toBe(409);
        expect(error.message).toBe("Cart is not available to cancel");
      });

    expect(cartsRepositoryFindById).toHaveBeenCalledTimes(1);
    expect(cartsRepositoryUpdate).toHaveBeenCalledTimes(0);
  });
});
