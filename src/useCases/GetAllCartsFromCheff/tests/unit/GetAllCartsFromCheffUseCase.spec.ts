import { getAllCartsFromCheffUseCase } from "../..";
import { cartsRepository } from "../../../../repositories/Carts";

describe("GetAllCartsFromCheffUseCase", () => {
  it("should be able to get all carts from cheff", async () => {
    const cheffId = 1;
    const responseData = "all carts from cheff";
    const cartsRepositoryfindByCheffId = jest
      .spyOn(cartsRepository, "findByCheffId")
      .mockImplementation(() => responseData as any);

    const response = await getAllCartsFromCheffUseCase.execute({
      cheffId
    });

    expect(cartsRepositoryfindByCheffId).toHaveBeenCalledWith({
      cheffId
    });
    expect(response).toEqual(responseData);
  });
});
