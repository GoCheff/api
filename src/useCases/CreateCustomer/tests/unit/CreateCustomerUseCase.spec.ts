import { createCustomerUseCaseFactory } from "../factories/CreateCustomer";
import { createCustomerUseCase } from "../..";
import { cryptProvider } from "../../../../providers";
import { customersRepository } from "../../../../repositories";
import { UnprocessableEntityError } from "../../../../errors/UnprocessableEntityError";

afterEach(() => {
  jest.clearAllMocks();
});

describe("CreateCustomerUseCase", () => {
  it("should create a new customer", async () => {
    const customer = createCustomerUseCaseFactory.getExecuteData();

    const customersRepositoryFindByEmail = jest
      .spyOn(customersRepository, "findByEmail")
      .mockImplementationOnce(async () => null);

    const hashedPassword = "hashedPassword";

    const cryptProviderCrypt = jest
      .spyOn(cryptProvider, "crypt")
      .mockImplementationOnce(async () => hashedPassword);

    const customersRepositoryCreate = jest
      .spyOn(customersRepository, "create")
      .mockImplementationOnce(
        async () => ({ ...customer, password: hashedPassword } as any)
      );

    const useCase = await createCustomerUseCase.execute(customer);

    expect(customersRepositoryFindByEmail).toHaveBeenCalledTimes(1);
    expect(cryptProviderCrypt).toHaveBeenCalledTimes(1);
    expect(customersRepositoryCreate).toHaveBeenCalledTimes(1);
    expect(useCase).toEqual({
      ...customer,
      password: hashedPassword
    });
  });

  it("should not create a new customer if email already exists", async () => {
    const customer = createCustomerUseCaseFactory.getExecuteData();

    const customersRepositoryFindByEmail = jest
      .spyOn(customersRepository, "findByEmail")
      .mockImplementationOnce(async () => customer as any);

    const hashedPassword = "hashedPassword";

    const cryptProviderCrypt = jest
      .spyOn(cryptProvider, "crypt")
      .mockImplementationOnce(async () => hashedPassword);

    const customersRepositoryCreate = jest
      .spyOn(customersRepository, "create")
      .mockImplementationOnce(
        async () => ({ ...customer, password: hashedPassword } as any)
      );

    await expect(createCustomerUseCase.execute(customer))
      .rejects.toBeInstanceOf(UnprocessableEntityError)
      .catch((error) => {
        expect(error.statusCode).toBe(422);
        expect(error.message).toBe("Email already exists");
      });

    expect(customersRepositoryFindByEmail).toHaveBeenCalledTimes(1);
    expect(cryptProviderCrypt).toHaveBeenCalledTimes(0);
    expect(customersRepositoryCreate).toHaveBeenCalledTimes(0);
  });
});
