import { cryptProvider, tokenProvider } from "../../../../providers";
import { NotFoundError } from "../../../../errors/NotFoundError";
import { signInAdminUseCase } from "../..";
import { signInAdminUseCaseFactory } from "../factories/SignInAdmin";
import { adminRepository } from "../../../../repositories";

afterEach(() => {
  jest.clearAllMocks();
});

describe("SignInAdminUseCase", () => {
  it("should sign in an admin", async () => {
    const admin = signInAdminUseCaseFactory.getExecuteData();
    const adminReturn =
      await signInAdminUseCaseFactory.getExecuteResponseData();

    const adminRepositoryFindByEmail = jest
      .spyOn(adminRepository, "findByEmail")
      .mockImplementationOnce(async () => adminReturn.user);

    const cryptProviderCrypt = jest
      .spyOn(cryptProvider, "compare")
      .mockImplementationOnce(async () => true);

    const tokenProviderGenerate = jest
      .spyOn(tokenProvider.admin, "generate")
      .mockImplementationOnce(async () => adminReturn.token);

    const useCase = await signInAdminUseCase.execute(admin);

    expect(adminRepositoryFindByEmail).toHaveBeenCalledTimes(1);
    expect(cryptProviderCrypt).toHaveBeenCalledTimes(1);
    expect(tokenProviderGenerate).toHaveBeenCalledTimes(1);
    expect(useCase).toEqual({
      user: adminReturn.user,
      token: adminReturn.token
    });
  });

  it("should not sign in an admin if email does not exists", async () => {
    const admin = signInAdminUseCaseFactory.getExecuteData();

    const adminRepositoryFindByEmail = jest
      .spyOn(adminRepository, "findByEmail")
      .mockImplementationOnce(async () => null);

    const cryptProviderCrypt = jest.spyOn(cryptProvider, "compare");

    const tokenProviderGenerate = jest.spyOn(tokenProvider.admin, "generate");

    const useCase = signInAdminUseCase.execute(admin);

    await expect(useCase)
      .rejects.toBeInstanceOf(NotFoundError)
      .catch((error) => {
        expect(error.message).toBe("Admin not found");
      });

    expect(adminRepositoryFindByEmail).toHaveBeenCalledTimes(1);
    expect(cryptProviderCrypt).toHaveBeenCalledTimes(0);
    expect(tokenProviderGenerate).toHaveBeenCalledTimes(0);
  });

  it("should not sign in an admin if password is incorrect", async () => {
    const admin = signInAdminUseCaseFactory.getExecuteData();
    const adminReturn =
      await signInAdminUseCaseFactory.getExecuteResponseData();

    const adminRepositoryFindByEmail = jest
      .spyOn(adminRepository, "findByEmail")
      .mockImplementationOnce(async () => adminReturn.user);

    const cryptProviderCrypt = jest
      .spyOn(cryptProvider, "compare")
      .mockImplementationOnce(async () => false);

    const tokenProviderGenerate = jest.spyOn(tokenProvider.admin, "generate");

    const useCase = signInAdminUseCase.execute(admin);

    await expect(useCase)
      .rejects.toBeInstanceOf(NotFoundError)
      .catch((error) => {
        expect(error.message).toBe("Admin not found");
      });

    expect(adminRepositoryFindByEmail).toHaveBeenCalledTimes(1);
    expect(cryptProviderCrypt).toHaveBeenCalledTimes(1);
    expect(tokenProviderGenerate).toHaveBeenCalledTimes(0);
  });
});
