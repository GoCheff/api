import { cryptProvider, tokenProvider } from "../../../../providers";
import { NotFoundError } from "../../../../errors/NotFoundError";
import { signInCheffUseCaseFactory } from "../factories/SignInCheff";
import { signInCheffUseCase } from "../../index";
import { cheffsRepository } from "../../../../repositories";

afterEach(() => {
  jest.clearAllMocks();
});

describe("SignInCheffUseCase", () => {
  it("should sign in an approved cheff", async () => {
    const cheff = signInCheffUseCaseFactory.getExecuteData();
    const cheffReturn =
      await signInCheffUseCaseFactory.getExecuteResponseData();

    const cheffsRepositoryFindByEmail = jest
      .spyOn(cheffsRepository, "findByEmail")
      .mockImplementationOnce(async () => cheffReturn.user);

    const cryptProviderCrypt = jest
      .spyOn(cryptProvider, "compare")
      .mockImplementationOnce(async () => true);

    const tokenProviderGenerate = jest
      .spyOn(tokenProvider.cheff, "generate")
      .mockImplementationOnce(async () => cheffReturn.token);

    const useCase = await signInCheffUseCase.execute(cheff);

    expect(cheffsRepositoryFindByEmail).toHaveBeenCalledTimes(1);
    expect(cryptProviderCrypt).toHaveBeenCalledTimes(1);
    expect(tokenProviderGenerate).toHaveBeenCalledTimes(1);
    expect(useCase).toEqual({
      user: cheffReturn.user,
      token: cheffReturn.token
    });
  });

  it("should not sign in a cheff if cheff is rejected", async () => {
    const cheff = signInCheffUseCaseFactory.getExecuteData();
    const cheffReturn =
      await signInCheffUseCaseFactory.getExecuteResponseData();
    const cheffReturnNotApproved =
      await signInCheffUseCaseFactory.rejectItCheff(cheffReturn.user);

    const cheffsRepositoryFindByEmail = jest
      .spyOn(cheffsRepository, "findByEmail")
      .mockImplementationOnce(async () => cheffReturnNotApproved);

    const cryptProviderCrypt = jest.spyOn(cryptProvider, "compare");

    const tokenProviderGenerate = jest.spyOn(tokenProvider.cheff, "generate");

    const useCase = signInCheffUseCase.execute(cheff);

    await expect(useCase)
      .rejects.toBeInstanceOf(NotFoundError)
      .catch((error) => {
        expect(error.statusCode).toBe(404);
        expect(error.message).toBe("Cheff not found");
      });

    expect(cheffsRepositoryFindByEmail).toHaveBeenCalledTimes(1);
    expect(cryptProviderCrypt).toHaveBeenCalledTimes(0);
    expect(tokenProviderGenerate).toHaveBeenCalledTimes(0);
  });

  it("should not sign in a cheff if cheff is pending", async () => {
    const cheff = signInCheffUseCaseFactory.getExecuteData();
    const cheffReturn =
      await signInCheffUseCaseFactory.getExecuteResponseData();
    const cheffReturnNotApproved =
      await signInCheffUseCaseFactory.setItCheffToPending(cheffReturn.user);

    const cheffsRepositoryFindByEmail = jest
      .spyOn(cheffsRepository, "findByEmail")
      .mockImplementationOnce(async () => cheffReturnNotApproved);

    const cryptProviderCrypt = jest.spyOn(cryptProvider, "compare");

    const tokenProviderGenerate = jest.spyOn(tokenProvider.cheff, "generate");

    const useCase = signInCheffUseCase.execute(cheff);

    await expect(useCase)
      .rejects.toBeInstanceOf(NotFoundError)
      .catch((error) => {
        expect(error.message).toBe("Cheff not found");
      });

    expect(cheffsRepositoryFindByEmail).toHaveBeenCalledTimes(1);
    expect(cryptProviderCrypt).toHaveBeenCalledTimes(0);
    expect(tokenProviderGenerate).toHaveBeenCalledTimes(0);
  });

  it("should not sign in a cheff if email does not exists", async () => {
    const cheff = signInCheffUseCaseFactory.getExecuteData();

    const cheffsRepositoryFindByEmail = jest
      .spyOn(cheffsRepository, "findByEmail")
      .mockImplementationOnce(async () => null);

    const cryptProviderCrypt = jest.spyOn(cryptProvider, "compare");

    const tokenProviderGenerate = jest.spyOn(tokenProvider.cheff, "generate");

    const useCase = signInCheffUseCase.execute(cheff);

    await expect(useCase)
      .rejects.toBeInstanceOf(NotFoundError)
      .catch((error) => {
        expect(error.statusCode).toBe(404);
        expect(error.message).toBe("Cheff not found");
      });

    expect(cheffsRepositoryFindByEmail).toHaveBeenCalledTimes(1);
    expect(cryptProviderCrypt).toHaveBeenCalledTimes(0);
    expect(tokenProviderGenerate).toHaveBeenCalledTimes(0);
  });

  it("should not sign in a cheff if password is incorrect", async () => {
    const cheff = signInCheffUseCaseFactory.getExecuteData();
    const cheffReturn =
      await signInCheffUseCaseFactory.getExecuteResponseData();

    const cheffsRepositoryFindByEmail = jest
      .spyOn(cheffsRepository, "findByEmail")
      .mockImplementationOnce(async () => cheffReturn.user);

    const cryptProviderCrypt = jest
      .spyOn(cryptProvider, "compare")
      .mockImplementationOnce(async () => false);

    const tokenProviderGenerate = jest.spyOn(tokenProvider.cheff, "generate");

    const useCase = signInCheffUseCase.execute(cheff);

    await expect(useCase)
      .rejects.toBeInstanceOf(NotFoundError)
      .catch((error) => {
        expect(error.statusCode).toBe(404);
        expect(error.message).toBe("Cheff not found");
      });

    expect(cheffsRepositoryFindByEmail).toHaveBeenCalledTimes(1);
    expect(cryptProviderCrypt).toHaveBeenCalledTimes(1);
    expect(tokenProviderGenerate).toHaveBeenCalledTimes(0);
  });
});
