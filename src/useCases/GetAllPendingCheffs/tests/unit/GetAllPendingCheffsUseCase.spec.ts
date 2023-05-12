import { getAllPendingCheffsUseCase } from "../../index";
import { cheffsRepository } from "../../../../repositories";

afterEach(() => {
  jest.clearAllMocks();
});

describe("GetAllPendingCheffsUseCase", () => {
  it("should be able to get all pending cheffs", async () => {
    const cheffsRepositoryFindbyStatus = jest
      .spyOn(cheffsRepository, "findByStatus")
      .mockResolvedValueOnce(["mockedCheffs"] as any);

    const response = await getAllPendingCheffsUseCase.execute();

    expect(response).toEqual(["mockedCheffs"]);
    expect(cheffsRepositoryFindbyStatus).toHaveBeenCalledTimes(1);
    expect(cheffsRepositoryFindbyStatus).toHaveBeenCalledWith({
      registerStatus: "pending"
    });
  });
});
