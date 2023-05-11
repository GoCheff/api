import { cryptProvider, tokenProvider } from "../../../../providers";
import { NotFoundError } from "../../../../errors/NotFoundError";
import { signInCustomerUseCase } from "../..";
import { signInCustomerUseCaseFactory } from "../factories/SignInCustomer";
import { customersRepository } from "../../../../repositories";

afterEach(() => {
  jest.clearAllMocks();
});

describe("SignInCustomerUseCase", () => {
  it("should sign in a customer", async () => {
    const customer = signInCustomerUseCaseFactory.getExecuteData();
    const customerReturn =
      await signInCustomerUseCaseFactory.getExecuteResponseData();

    const customersRepositoryFindByEmail = jest
      .spyOn(customersRepository, "findByEmail")
      .mockImplementationOnce(async () => customerReturn.user);

    const cryptProviderCrypt = jest
      .spyOn(cryptProvider, "compare")
      .mockImplementationOnce(async () => true);

    const tokenProviderGenerate = jest
      .spyOn(tokenProvider.customer, "generate")
      .mockImplementationOnce(async () => customerReturn.token);

    const useCase = await signInCustomerUseCase.execute(customer);

    expect(customersRepositoryFindByEmail).toHaveBeenCalledTimes(1);
    expect(cryptProviderCrypt).toHaveBeenCalledTimes(1);
    expect(tokenProviderGenerate).toHaveBeenCalledTimes(1);
    expect(useCase).toEqual({
      user: customerReturn.user,
      token: customerReturn.token
    });
  });

  it("should not sign in a customer if email does not exists", async () => {
    const customer = signInCustomerUseCaseFactory.getExecuteData();

    const customersRepositoryFindByEmail = jest
      .spyOn(customersRepository, "findByEmail")
      .mockImplementationOnce(async () => null);

    const cryptProviderCrypt = jest.spyOn(cryptProvider, "compare");

    const tokenProviderGenerate = jest.spyOn(
      tokenProvider.customer,
      "generate"
    );

    const useCase = signInCustomerUseCase.execute(customer);

    await expect(useCase)
      .rejects.toBeInstanceOf(NotFoundError)
      .catch((error) => {
        expect(error.statusCode).toBe(404);
        expect(error.message).toBe("Customer not found");
      });

    expect(customersRepositoryFindByEmail).toHaveBeenCalledTimes(1);
    expect(cryptProviderCrypt).toHaveBeenCalledTimes(0);
    expect(tokenProviderGenerate).toHaveBeenCalledTimes(0);
  });

  it("should not sign in a customer if password is incorrect", async () => {
    const customer = signInCustomerUseCaseFactory.getExecuteData();
    const customerReturn =
      await signInCustomerUseCaseFactory.getExecuteResponseData();

    const customersRepositoryFindByEmail = jest
      .spyOn(customersRepository, "findByEmail")
      .mockImplementationOnce(async () => customerReturn.user);

    const cryptProviderCrypt = jest
      .spyOn(cryptProvider, "compare")
      .mockImplementationOnce(async () => false);

    const tokenProviderGenerate = jest.spyOn(
      tokenProvider.customer,
      "generate"
    );

    const useCase = signInCustomerUseCase.execute(customer);

    await expect(useCase)
      .rejects.toBeInstanceOf(NotFoundError)
      .catch((error) => {
        expect(error.statusCode).toBe(404);
        expect(error.message).toBe("Customer not found");
      });

    expect(customersRepositoryFindByEmail).toHaveBeenCalledTimes(1);
    expect(cryptProviderCrypt).toHaveBeenCalledTimes(1);
    expect(tokenProviderGenerate).toHaveBeenCalledTimes(0);
  });
});
