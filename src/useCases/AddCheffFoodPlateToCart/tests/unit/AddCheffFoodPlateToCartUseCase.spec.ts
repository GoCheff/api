import { addCheffFoodPlateToCartUseCaseFactory } from "../factories";
import { addCheffFoodPlateToCartUseCase } from "../../index";
import { cartsRepository } from "../../../../repositories/Carts";
import { foodPlatesRepository } from "../../../../repositories/FoodPlates";
import { cartItemsRepository } from "../../../../repositories/CartItems";
import { AppError } from "../../../../errors/AppError";
import { NotFoundError } from "../../../../errors/NotFoundError";

afterEach(() => {
  jest.clearAllMocks();
});

describe("AddCheffFoodPlateToCartUseCase", () => {
  it("should be able to add a cheff food plate to a customer cart and return the cart", async () => {
    const data = addCheffFoodPlateToCartUseCaseFactory.getExecuteData();
    const cart = addCheffFoodPlateToCartUseCaseFactory.getExecuteResponseData();

    const cartsRepositoryFindById = jest
      .spyOn(cartsRepository, "findByCustomerId")
      .mockImplementationOnce(async () => ({
        ...cart,
        id: "cart-id",
        cartItems: []
      }));

    const foodPlatesRepositoryFindByIdAndCheffId = jest
      .spyOn(foodPlatesRepository, "findByIdAndCheffId")
      .mockImplementationOnce(
        async () =>
          ({
            id: data.foodPlateId
          } as any)
      );

    const cartsRepositoryCreate = jest.spyOn(cartsRepository, "create");

    const cartsRepositoryUpdate = jest.spyOn(
      cartItemsRepository,
      "updateQuantity"
    );

    const cartItemRepositoryCreate = jest
      .spyOn(cartItemsRepository, "create")
      .mockImplementationOnce(
        async () =>
          ({
            id: "cart-item-id",
            foodPlateId: data.foodPlateId,
            quantity: data.quantity
          } as any)
      );

    const response = await addCheffFoodPlateToCartUseCase.execute(data);

    expect(cartsRepositoryFindById).toHaveBeenCalledWith({
      customerId: data.customerId,
      where: {
        status: "open"
      },
      include: {
        cartItems: {
          include: {
            foodPlate: true
          }
        }
      }
    });
    expect(foodPlatesRepositoryFindByIdAndCheffId).toHaveBeenCalledWith({
      id: data.foodPlateId,
      cheffId: data.cheffId
    });
    expect(cartsRepositoryCreate).not.toHaveBeenCalled();
    expect(cartsRepositoryUpdate).not.toHaveBeenCalled();
    expect(cartItemRepositoryCreate).toHaveBeenCalledWith({
      cartId: "cart-id",
      foodPlateId: data.foodPlateId,
      quantity: data.quantity
    });
    expect(response).toEqual(
      expect.objectContaining({
        ...cart,
        id: "cart-id",
        cartItems: [
          {
            id: "cart-item-id",
            foodPlateId: data.foodPlateId,
            quantity: data.quantity
          }
        ]
      })
    );
  });

  it("should be able to create a new cart with the cheff food plate and return the cart", async () => {
    const data = addCheffFoodPlateToCartUseCaseFactory.getExecuteData();
    const cart = addCheffFoodPlateToCartUseCaseFactory.getExecuteResponseData();

    const cartsRepositoryFindById = jest
      .spyOn(cartsRepository, "findByCustomerId")
      .mockImplementationOnce(async () => null);

    const foodPlatesRepositoryFindByIdAndCheffId = jest
      .spyOn(foodPlatesRepository, "findByIdAndCheffId")
      .mockImplementationOnce(
        async () =>
          ({
            id: data.foodPlateId
          } as any)
      );

    const cartsRepositoryCreate = jest
      .spyOn(cartsRepository, "create")
      .mockImplementationOnce(async () => ({
        ...cart,
        customerId: data.customerId,
        cartItems: [
          {
            id: "cart-item-id",
            foodPlateId: data.foodPlateId,
            quantity: data.quantity
          }
        ]
      }));

    const cartItemRepositoryUpdateQuantity = jest.spyOn(
      cartItemsRepository,
      "updateQuantity"
    );

    const cartItemRepositoryCreate = jest.spyOn(cartItemsRepository, "create");

    const response = await addCheffFoodPlateToCartUseCase.execute(data);

    expect(cartsRepositoryFindById).toHaveBeenCalledWith({
      customerId: data.customerId,
      where: {
        status: "open"
      },
      include: {
        cartItems: {
          include: {
            foodPlate: true
          }
        }
      }
    });
    expect(foodPlatesRepositoryFindByIdAndCheffId).toHaveBeenCalledWith({
      id: data.foodPlateId,
      cheffId: data.cheffId
    });
    expect(cartsRepositoryCreate).toHaveBeenCalledWith({
      customerId: data.customerId,
      cartItems: [
        {
          foodPlateId: data.foodPlateId,
          quantity: data.quantity
        }
      ]
    });
    expect(cartItemRepositoryUpdateQuantity).not.toHaveBeenCalled();
    expect(cartItemRepositoryCreate).not.toHaveBeenCalled();
    expect(response).toEqual(
      expect.objectContaining({
        ...cart,
        customerId: data.customerId,
        cartItems: [
          {
            id: "cart-item-id",
            foodPlateId: data.foodPlateId,
            quantity: data.quantity
          }
        ]
      })
    );
  });

  it("should be able to update the quantity of the cheff food plate in the customer cart and return the cart", async () => {
    const data = addCheffFoodPlateToCartUseCaseFactory.getExecuteData();
    const cart = addCheffFoodPlateToCartUseCaseFactory.getExecuteResponseData();

    const cartsRepositoryFindById = jest
      .spyOn(cartsRepository, "findByCustomerId")
      .mockImplementationOnce(async () => ({
        ...cart,
        id: "cart-id",
        cartItems: [
          {
            id: "cart-item-id",
            foodPlateId: data.foodPlateId,
            quantity: 1,
            foodPlate: {
              id: data.foodPlateId,
              cheffId: data.cheffId
            }
          }
        ]
      }));

    const foodPlatesRepositoryFindByIdAndCheffId = jest
      .spyOn(foodPlatesRepository, "findByIdAndCheffId")
      .mockImplementationOnce(
        async () =>
          ({
            id: data.foodPlateId
          } as any)
      );

    const cartsRepositoryCreate = jest.spyOn(cartsRepository, "create");

    const cartsRepositoryUpdateQuantity = jest
      .spyOn(cartItemsRepository, "updateQuantity")
      .mockImplementationOnce(
        async () =>
          ({
            id: "cart-item-id",
            foodPlateId: data.foodPlateId,
            quantity: data.quantity
          } as any)
      );

    const cartItemRepositoryCreate = jest.spyOn(cartItemsRepository, "create");

    const response = await addCheffFoodPlateToCartUseCase.execute(data);

    expect(cartsRepositoryFindById).toHaveBeenCalledWith({
      customerId: data.customerId,
      where: {
        status: "open"
      },
      include: {
        cartItems: {
          include: {
            foodPlate: true
          }
        }
      }
    });
    expect(foodPlatesRepositoryFindByIdAndCheffId).toHaveBeenCalledWith({
      id: data.foodPlateId,
      cheffId: data.cheffId
    });
    expect(cartsRepositoryCreate).not.toHaveBeenCalled();
    expect(cartsRepositoryUpdateQuantity).toHaveBeenCalledWith({
      id: "cart-item-id",
      quantity: data.quantity
    });
    expect(cartItemRepositoryCreate).not.toHaveBeenCalled();
    expect(response).toEqual(
      expect.objectContaining({
        ...cart,
        id: "cart-id",
        cartItems: [
          {
            id: "cart-item-id",
            foodPlateId: data.foodPlateId,
            quantity: data.quantity,
            foodPlate: {
              id: data.foodPlateId,
              cheffId: data.cheffId
            }
          }
        ]
      })
    );
  });

  it("should throw an error if has another cheff food plate in the customer cart", async () => {
    const data = addCheffFoodPlateToCartUseCaseFactory.getExecuteData();
    const cart = addCheffFoodPlateToCartUseCaseFactory.getExecuteResponseData();

    const cartsRepositoryFindById = jest
      .spyOn(cartsRepository, "findByCustomerId")
      .mockImplementationOnce(async () => ({
        ...cart,
        id: "cart-id",
        cartItems: [
          {
            id: "cart-item-id",
            foodPlateId: "another-food-plate-id",
            quantity: 1,
            foodPlate: {
              id: "another-food-plate-id",
              cheffId: "another-cheff-id"
            }
          }
        ]
      }));

    const foodPlatesRepositoryFindByIdAndCheffId = jest.spyOn(
      foodPlatesRepository,
      "findByIdAndCheffId"
    );

    const cartsRepositoryCreate = jest.spyOn(cartsRepository, "create");

    const cartsRepositoryUpdateQuantity = jest.spyOn(
      cartItemsRepository,
      "updateQuantity"
    );

    const cartItemRepositoryCreate = jest.spyOn(cartItemsRepository, "create");

    const useCase = addCheffFoodPlateToCartUseCase.execute(data);

    await expect(useCase)
      .rejects.toBeInstanceOf(AppError)
      .catch((error) => {
        expect(error.statusCode).toBe(400);
        expect(error.message).toBe("You can't add another cheff food plate");
      });

    expect(cartsRepositoryFindById).toHaveBeenCalledWith({
      customerId: data.customerId,
      where: {
        status: "open"
      },
      include: {
        cartItems: {
          include: {
            foodPlate: true
          }
        }
      }
    });
    expect(foodPlatesRepositoryFindByIdAndCheffId).not.toHaveBeenCalled();
    expect(cartsRepositoryCreate).not.toHaveBeenCalled();
    expect(cartsRepositoryUpdateQuantity).not.toHaveBeenCalled();
    expect(cartItemRepositoryCreate).not.toHaveBeenCalled();
  });

  it("should throw an error if the cheff food plate does not exist", async () => {
    const data = addCheffFoodPlateToCartUseCaseFactory.getExecuteData();
    const cart = addCheffFoodPlateToCartUseCaseFactory.getExecuteResponseData();

    const cartsRepositoryFindById = jest
      .spyOn(cartsRepository, "findByCustomerId")
      .mockImplementationOnce(async () => ({
        ...cart,
        id: "cart-id",
        cartItems: [
          {
            id: "cart-item-id",
            foodPlateId: "another-food-plate-id",
            quantity: 1,
            foodPlate: {
              id: "another-food-plate-id",
              cheffId: data.cheffId
            }
          }
        ]
      }));

    const foodPlatesRepositoryFindByIdAndCheffId = jest
      .spyOn(foodPlatesRepository, "findByIdAndCheffId")
      .mockImplementationOnce(async () => null);

    const cartsRepositoryCreate = jest.spyOn(cartsRepository, "create");

    const cartsRepositoryUpdateQuantity = jest.spyOn(
      cartItemsRepository,
      "updateQuantity"
    );

    const cartItemRepositoryCreate = jest.spyOn(cartItemsRepository, "create");

    const useCase = addCheffFoodPlateToCartUseCase.execute(data);

    await expect(useCase)
      .rejects.toBeInstanceOf(NotFoundError)
      .catch((error) => {
        expect(error.statusCode).toBe(404);
        expect(error.message).toBe("Cheff food plate not found");
      });

    expect(cartsRepositoryFindById).toHaveBeenCalledWith({
      customerId: data.customerId,
      where: {
        status: "open"
      },
      include: {
        cartItems: {
          include: {
            foodPlate: true
          }
        }
      }
    });
    expect(foodPlatesRepositoryFindByIdAndCheffId).toHaveBeenCalledWith({
      id: data.foodPlateId,
      cheffId: data.cheffId
    });
    expect(cartsRepositoryCreate).not.toHaveBeenCalled();
    expect(cartsRepositoryUpdateQuantity).not.toHaveBeenCalled();
    expect(cartItemRepositoryCreate).not.toHaveBeenCalled();
  });
});
