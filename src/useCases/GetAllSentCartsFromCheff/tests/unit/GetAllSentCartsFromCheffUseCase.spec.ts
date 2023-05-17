import { getAllSentCartsFromCheffUseCase } from "../../index";
import { cartsRepository } from "../../../../repositories/Carts";

describe("GetAllSentCartsFromCheffUseCase", () => {
  it("should be able to get all sent carts from cheff", async () => {
    const cheffId = 1;
    const responseData = "all sent carts from cheff";
    const cartsRepositoryfindByStatusAndCheffId = jest
      .spyOn(cartsRepository, "findByStatusAndCheffId")
      .mockImplementation(() => responseData as any);

    const response = await getAllSentCartsFromCheffUseCase.execute({
      cheffId
    });

    expect(cartsRepositoryfindByStatusAndCheffId).toHaveBeenCalledWith({
      status: "sent",
      cheffId
    });
    expect(response).toEqual(responseData);
  });
});
