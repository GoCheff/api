import { CreateCustomerUseCaseDTO } from "./CreateCustomerUseCaseDTO";
import { CustomersRepositoryDTO } from "../../repositories/Users/Customers/CustomersRepositoryDTO";

class CreateCustomerUseCase
  implements CreateCustomerUseCaseDTO.ICreateCustomerUseCase
{
  constructor(
    private readonly customersRepository: CustomersRepositoryDTO.ICustomersRepository
  ) {}

  public async execute({
    email,
    password
  }: CreateCustomerUseCaseDTO.ExecuteDTO): CreateCustomerUseCaseDTO.ExecuteResponseDTO {
    return this.customersRepository.create({ email, password });
  }
}

export { CreateCustomerUseCase };
