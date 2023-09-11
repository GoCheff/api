import { getAllCartsFromCustomerUseCase } from "../..";
import { cartsRepository } from "../../../../repositories/Carts";

describe("GetAllCartsFromCustomerUseCase", () => {
  it("should be able to get all carts from customer", async () => {
    const customerId = 1;
    const include = { cartItems: { include: { foodPlate: true } } };
    const responseData = "all carts from customer";
    const cartsRepositoryfindAllByCustomerId = jest
      .spyOn(cartsRepository, "findAllByCustomerId")
      .mockImplementation(() => responseData as any);

    const response = await getAllCartsFromCustomerUseCase.execute({
      customerId
    });

    expect(cartsRepositoryfindAllByCustomerId).toHaveBeenCalledWith({
      customerId,
      include
    });
    expect(response).toEqual(responseData);
  });
});
