import { createCustomerUseCase } from "../..";
import { usersRepository } from "../../../../repositories";
import { createCustomerUseCaseFactory } from "../factories/CreateCustomer";

afterEach(() => {
  jest.clearAllMocks();
});

describe("CreateCustomerUseCase", () => {
  it("should create a new customer", async () => {
    const customer = createCustomerUseCaseFactory.getExecuteData();

    const customersRepositoryCreate = jest
      .spyOn(usersRepository.customers, "create")
      .mockImplementationOnce(async () => customer as any);

    const useCase = await createCustomerUseCase.execute(customer);

    expect(customersRepositoryCreate).toHaveBeenCalledTimes(1);
    expect(useCase).toEqual(customer);
  });
});
