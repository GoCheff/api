import { NotFoundError } from "../../../../errors/NotFoundError";
import { AppError } from "../../../../errors/AppError";
import { sendCartToCheffUseCase } from "../..";
import { sendCartToCheffUseCaseFactory } from "../factories/SendCartToCheff";
import { cartsRepository } from "../../../../repositories/Carts";

afterEach(() => {
  jest.clearAllMocks();
});

describe("SendCartToCheffUseCase", () => {
  it("should send cart to cheff", async () => {
    const data = sendCartToCheffUseCaseFactory.getExecuteData();
    const cartReturn =
      await sendCartToCheffUseCaseFactory.getExecuteResponseData();

    const cartsRepositoryFindById = jest
      .spyOn(cartsRepository, "findById")
      .mockImplementationOnce(async () => cartReturn);

    const cartsRepositoryUpdate = jest
      .spyOn(cartsRepository, "update")
      .mockImplementationOnce(async () => cartReturn);

    const useCase = await sendCartToCheffUseCase.execute(data);

    expect(cartsRepositoryFindById).toHaveBeenCalledTimes(1);
    expect(cartsRepositoryUpdate).toHaveBeenCalledTimes(1);
    expect(useCase).toEqual(cartReturn);
  });

  it("should not send cart to cheff if cart does not exists", async () => {
    const data = sendCartToCheffUseCaseFactory.getExecuteData();

    const cartsRepositoryFindById = jest
      .spyOn(cartsRepository, "findById")
      .mockImplementationOnce(async () => null);

    const cartsRepositoryUpdate = jest.spyOn(cartsRepository, "update");

    const useCase = sendCartToCheffUseCase.execute(data);

    await expect(useCase)
      .rejects.toBeInstanceOf(NotFoundError)
      .catch((error) => {
        expect(error.statusCode).toBe(404);
        expect(error.message).toBe("Cart not found");
      });

    expect(cartsRepositoryFindById).toHaveBeenCalledTimes(1);
    expect(cartsRepositoryUpdate).toHaveBeenCalledTimes(0);
  });

  it("should not send cart to cheff if cart is in the status of 'sent'", async () => {
    const data = sendCartToCheffUseCaseFactory.getExecuteData();
    const cart = await sendCartToCheffUseCaseFactory.getExecuteResponseData();
    cart.status = "sent";

    const cartsRepositoryFindById = jest
      .spyOn(cartsRepository, "findById")
      .mockImplementationOnce(async () => cart);

    const cartsRepositoryUpdate = jest.spyOn(cartsRepository, "update");

    const useCase = sendCartToCheffUseCase.execute(data);

    await expect(useCase)
      .rejects.toBeInstanceOf(AppError)
      .catch((error) => {
        expect(error.statusCode).toBe(409);
        expect(error.message).toBe("Cart is not open");
      });

    expect(cartsRepositoryFindById).toHaveBeenCalledTimes(1);
    expect(cartsRepositoryUpdate).toHaveBeenCalledTimes(0);
  });

  it("should not send cart to cheff if cart is in the status of 'approved'", async () => {
    const data = sendCartToCheffUseCaseFactory.getExecuteData();
    const cart = await sendCartToCheffUseCaseFactory.getExecuteResponseData();
    cart.status = "approved";

    const cartsRepositoryFindById = jest
      .spyOn(cartsRepository, "findById")
      .mockImplementationOnce(async () => cart);

    const cartsRepositoryUpdate = jest.spyOn(cartsRepository, "update");

    const useCase = sendCartToCheffUseCase.execute(data);

    await expect(useCase)
      .rejects.toBeInstanceOf(AppError)
      .catch((error) => {
        expect(error.statusCode).toBe(409);
        expect(error.message).toBe("Cart is not open");
      });

    expect(cartsRepositoryFindById).toHaveBeenCalledTimes(1);
    expect(cartsRepositoryUpdate).toHaveBeenCalledTimes(0);
  });

  it("should not send cart to cheff if cart is in the status of 'rejected'", async () => {
    const data = sendCartToCheffUseCaseFactory.getExecuteData();
    const cart = await sendCartToCheffUseCaseFactory.getExecuteResponseData();
    cart.status = "rejected";

    const cartsRepositoryFindById = jest
      .spyOn(cartsRepository, "findById")
      .mockImplementationOnce(async () => cart);

    const cartsRepositoryUpdate = jest.spyOn(cartsRepository, "update");

    const useCase = sendCartToCheffUseCase.execute(data);

    await expect(useCase)
      .rejects.toBeInstanceOf(AppError)
      .catch((error) => {
        expect(error.statusCode).toBe(409);
        expect(error.message).toBe("Cart is not open");
      });

    expect(cartsRepositoryFindById).toHaveBeenCalledTimes(1);
    expect(cartsRepositoryUpdate).toHaveBeenCalledTimes(0);
  });

  it("should not send cart to cheff if cart is in the status of 'paid'", async () => {
    const data = sendCartToCheffUseCaseFactory.getExecuteData();
    const cart = await sendCartToCheffUseCaseFactory.getExecuteResponseData();
    cart.status = "paid";

    const cartsRepositoryFindById = jest
      .spyOn(cartsRepository, "findById")
      .mockImplementationOnce(async () => cart);

    const cartsRepositoryUpdate = jest.spyOn(cartsRepository, "update");

    const useCase = sendCartToCheffUseCase.execute(data);

    await expect(useCase)
      .rejects.toBeInstanceOf(AppError)
      .catch((error) => {
        expect(error.statusCode).toBe(409);
        expect(error.message).toBe("Cart is not open");
      });

    expect(cartsRepositoryFindById).toHaveBeenCalledTimes(1);
    expect(cartsRepositoryUpdate).toHaveBeenCalledTimes(0);
  });

  it("should not send cart to cheff if cart is in the status of 'canceled'", async () => {
    const data = sendCartToCheffUseCaseFactory.getExecuteData();
    const cart = await sendCartToCheffUseCaseFactory.getExecuteResponseData();
    cart.status = "canceled";

    const cartsRepositoryFindById = jest
      .spyOn(cartsRepository, "findById")
      .mockImplementationOnce(async () => cart);

    const cartsRepositoryUpdate = jest.spyOn(cartsRepository, "update");

    const useCase = sendCartToCheffUseCase.execute(data);

    await expect(useCase)
      .rejects.toBeInstanceOf(AppError)
      .catch((error) => {
        expect(error.statusCode).toBe(409);
        expect(error.message).toBe("Cart is not open");
      });

    expect(cartsRepositoryFindById).toHaveBeenCalledTimes(1);
    expect(cartsRepositoryUpdate).toHaveBeenCalledTimes(0);
  });

  it("should not send cart to cheff if cart is in the status of 'delivered'", async () => {
    const data = sendCartToCheffUseCaseFactory.getExecuteData();
    const cart = await sendCartToCheffUseCaseFactory.getExecuteResponseData();
    cart.status = "delivered";

    const cartsRepositoryFindById = jest
      .spyOn(cartsRepository, "findById")
      .mockImplementationOnce(async () => cart);

    const cartsRepositoryUpdate = jest.spyOn(cartsRepository, "update");

    const useCase = sendCartToCheffUseCase.execute(data);

    await expect(useCase)
      .rejects.toBeInstanceOf(AppError)
      .catch((error) => {
        expect(error.statusCode).toBe(409);
        expect(error.message).toBe("Cart is not open");
      });

    expect(cartsRepositoryFindById).toHaveBeenCalledTimes(1);
    expect(cartsRepositoryUpdate).toHaveBeenCalledTimes(0);
  });

  it("should not send cart to cheff if cart is empty", async () => {
    const data = sendCartToCheffUseCaseFactory.getExecuteData();
    const cart = await sendCartToCheffUseCaseFactory.getExecuteResponseData();
    cart.cartItems = [];

    const cartsRepositoryFindById = jest
      .spyOn(cartsRepository, "findById")
      .mockImplementationOnce(async () => cart);

    const cartsRepositoryUpdate = jest.spyOn(cartsRepository, "update");

    const useCase = sendCartToCheffUseCase.execute(data);

    await expect(useCase)
      .rejects.toBeInstanceOf(AppError)
      .catch((error) => {
        expect(error.statusCode).toBe(409);
        expect(error.message).toBe("Cart is empty");
      });

    expect(cartsRepositoryFindById).toHaveBeenCalledTimes(1);
    expect(cartsRepositoryUpdate).toHaveBeenCalledTimes(0);
  });
});
