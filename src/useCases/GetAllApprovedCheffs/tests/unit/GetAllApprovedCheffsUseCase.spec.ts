import { getAllApprovedCheffsUseCase } from "../../index";
import { cheffsRepository } from "../../../../repositories";

afterEach(() => {
  jest.clearAllMocks();
});

describe("GetAllApprovedCheffsUseCase", () => {
  it("should be able to get all approved cheffs", async () => {
    const cheffsRepositoryFindbyStatus = jest
      .spyOn(cheffsRepository, "findByStatus")
      .mockResolvedValueOnce(["mockedCheffs"] as any);

    const response = await getAllApprovedCheffsUseCase.execute();

    expect(response).toEqual(["mockedCheffs"]);
    expect(cheffsRepositoryFindbyStatus).toHaveBeenCalledTimes(1);
    expect(cheffsRepositoryFindbyStatus).toHaveBeenCalledWith({
      registerStatus: "approved"
    });
  });
});
