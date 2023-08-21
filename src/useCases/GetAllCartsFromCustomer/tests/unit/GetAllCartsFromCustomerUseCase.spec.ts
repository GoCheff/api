import { getAllCartsFromCustomerUseCase } from "../..";
import { cartsRepository } from "../../../../repositories/Carts";

describe("GetAllCartsFromCustomerUseCase", () => {
  it("should be able to get all carts from customer", async () => {
    const customerId = 1;
    const responseData = "all carts from customer";
    const cartsRepositoryfindAllByCustomerId = jest
      .spyOn(cartsRepository, "findAllByCustomerId")
      .mockImplementation(() => responseData as any);

    const response = await getAllCartsFromCustomerUseCase.execute({
      customerId
    });

    expect(cartsRepositoryfindAllByCustomerId).toHaveBeenCalledWith({
      customerId
    });
    expect(response).toEqual(responseData);
  });
});
