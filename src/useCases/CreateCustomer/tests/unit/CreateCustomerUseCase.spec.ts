import { createCustomerUseCase } from "../..";
import { usersRepository } from "../../../../repositories";
import { createCustomerUseCaseFactory } from "../factories/CreateCustomer";
import { cryptProvider } from "../../../../providers/Crypt";
import { UnauthorizedError } from "../../../../errors/UnauthorizedError";

afterEach(() => {
  jest.clearAllMocks();
});

describe("CreateCustomerUseCase", () => {
  it("should create a new customer", async () => {
    const customer = createCustomerUseCaseFactory.getExecuteData();

    const customersRepositoryFindByEmail = jest
      .spyOn(usersRepository.customers, "findByEmail")
      .mockImplementationOnce(async () => undefined);

    const hashedPassword = "hashedPassword";

    const cryptProviderCrypt = jest
      .spyOn(cryptProvider, "crypt")
      .mockImplementationOnce(async () => hashedPassword);

    const customersRepositoryCreate = jest
      .spyOn(usersRepository.customers, "create")
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
      .spyOn(usersRepository.customers, "findByEmail")
      .mockImplementationOnce(async () => customer as any);

    const hashedPassword = "hashedPassword";

    const cryptProviderCrypt = jest
      .spyOn(cryptProvider, "crypt")
      .mockImplementationOnce(async () => hashedPassword);

    const customersRepositoryCreate = jest
      .spyOn(usersRepository.customers, "create")
      .mockImplementationOnce(
        async () => ({ ...customer, password: hashedPassword } as any)
      );

    await expect(
      createCustomerUseCase.execute(customer)
    ).rejects.toBeInstanceOf(UnauthorizedError);

    expect(customersRepositoryFindByEmail).toHaveBeenCalledTimes(1);
    expect(cryptProviderCrypt).toHaveBeenCalledTimes(0);
    expect(customersRepositoryCreate).toHaveBeenCalledTimes(0);
  });
});
